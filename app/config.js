const Config = require('electron-config');

module.exports = new Config({
    defaults : {
        lastWindowState : {
            width  : 1000,
            height : 800,
        },
        windowState : {
            width  : 1000,
            height : 800,
        },
    },
});
