const Config = require('electron-config');

module.exports = new Config({
    defaults : {
        lastWindowState : {
            width  : 800,
            height : 600,
        },
        windowState : {
            width  : 800,
            height : 600,
        },
    },
});
