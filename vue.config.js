const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "src/styles/global.scss";',
      },
    },
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        asar: false,
      },
    },
  },

};
