const appPkg  = require('./app/package');
const path    = require('path');
const webpack = require('webpack');

module.exports = {
    entry : 'src/index.js',
    dist  : 'app/renderer',
    html  : {
        title    : appPkg.productName,
        template : 'index.ejs',
    },
    // In production mode
    // Electron can only load from relative path
    homepage : './',
    // Exclude built-in Electron modules from bundle
    webpack(config) {
        config.target = 'electron-renderer';

        config.plugins.push(new webpack.IgnorePlugin(/async|compile/, /ajv/));

        return config;
    },
    extendWebpack(config) {
        config.merge({
            resolve : {
                alias : {
                    styles     : path.resolve(__dirname, './src/stylesheets'),
                    plugins    : path.resolve(__dirname, './src/plugins'),
                    mixins     : path.resolve(__dirname, './src/mixins'),
                    libs       : path.resolve(__dirname, './src/libs'),
                    config     : path.resolve(__dirname, './src/config'),
                    components : path.resolve(__dirname, './src/components'),
                    assets     : path.resolve(__dirname, './src/assets'),
                },
            },
            devtool : '#cheap-module-source-map',
        });
    },
    presets : [
        require('poi-preset-eslint')({
            loaderOptions : {
                configFile  : path.resolve(__dirname, './.eslintrc.json'),
                useEslintrc : true,
            },
            mode : '*',
        }),
    ],
};
