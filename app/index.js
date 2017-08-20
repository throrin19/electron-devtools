const path = require('path');
const fs = require('fs');
const { app, BrowserWindow, Menu } = require('electron');
const appMenu = require('./menu');
const config = require('./config');
const pkg = require('./package');

require('electron-debug')();
require('electron-context-menu')();

const isDev = typeof process.env.NODE_ENV === 'string'
    ? (process.env.NODE_ENV === 'development')
    : require('electron-is-dev');

let mainWindow;
let isQuitting = false;

// Set title of the app that will use shown in window titlebar
app.setName(pkg.productName);

const isAlreadyRunning = app.makeSingleInstance(() => {
    if (mainWindow) {
        if (mainWindow.isMinimized()) {
            mainWindow.restore();
        }

        mainWindow.show();
    }
});

if (isAlreadyRunning) {
    app.quit();
}

const createMainWindow = () => {
    const lastWindowState = config.get('lastWindowState');
    const windowState = config.get('windowState');

    console.log(lastWindowState);

    const win = new BrowserWindow({
        title         : app.getName(),
        x             : lastWindowState.x,
        y             : lastWindowState.y,
        width         : windowState.width,
        height        : windowState.height,
        minWidth      : windowState.width,
        minHeight     : windowState.height,
        frame         : false,
    });


    const url = isDev ? 'http://localhost:4000' : `file://${path.join(__dirname, 'renderer', 'index.html')}`;

    win.loadURL(url);

    win.on('close', (e) => {
        if (!isQuitting) {
            e.preventDefault();

            if (process.platform === 'darwin') {
                app.hide();
            } else {
                win.hide();
            }
        }
    });

    win.on('page-title-updated', (e) => {
        e.preventDefault();
    });

    return win;
};

app.on('ready', () => {
    Menu.setApplicationMenu(appMenu);
    mainWindow = createMainWindow();
});

app.on('activate', () => {
    mainWindow.show();
});

app.on('before-quit', () => {
    isQuitting = true;

    if (!mainWindow.isFullScreen()) {
        config.set('lastWindowState', mainWindow.getBounds());
    }
});
