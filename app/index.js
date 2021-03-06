const path = require('path');
const fs = require('fs');
const { app, BrowserWindow, Menu } = require('electron');
const appMenu = require('./menu');
const config = require('./config');
const pkg = require('./package.json');

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

    const win = new BrowserWindow({
        icon          : `${path.join(__dirname, 'icon.png')}`,
        title         : app.getName(),
        x             : lastWindowState.x,
        y             : lastWindowState.y,
        width         : 1000,
        height        : 700,
        minWidth      : 1000,
        minHeight     : 700,
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
    if (isDev) {
        Menu.setApplicationMenu(appMenu.dev);
    } else {
        Menu.setApplicationMenu(appMenu.prod);
    }
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
