'use strict';

const { Controller } = require('egg');

const users = [
  { id: 0, name: 'Umi', nickName: 'U', gender: 'MALE' },
  { id: 1, name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

const wait = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await wait(5000);
    ctx.body = {
      success: true,
      data: { list: users },
      errorCode: 0,
    };
  }
}

module.exports = HomeController;
