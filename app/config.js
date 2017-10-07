const Config = require('electron-config');

module.exports = new Config({
    defaults : {
        lastWindowState : {
            width  : 1000,
            height : 700,
        },
        windowState : {
            width  : 1000,
            height : 700,
        },
    },
});
