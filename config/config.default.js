/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1676432376695_1556';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  // 配置安全验证
  exports.security = {
    csrf: {
      ignore: ctx => {
        // 对指定接口地址忽略验证
        if (ctx.request.url === '/admin/goods/goodsUploadImage') {
          return true;
        }
        return false;
      },
    },
    // 将域名加入白名单
    domainWhiteList: [ 'http://localhost:8080' ],
  };

  // 配置允许跨域
  exports.cors = {
    // 任何地址都可以访问
    origin: '*',
    // 指定地址才可以访问
    // origin: 'http://localhost:8080',
    allowMethods: 'GET,PUT,POST,DELETE',
    // cookie跨域配置
    credentials: true,
  };

  return {
    ...config,
    ...userConfig,
  };
};
