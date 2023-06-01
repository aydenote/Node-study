'use strict';

const fs = require('fs').promises;
class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static getUsers(...fields) {
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs
      .readFile('./src/databases/users.json')
      .then(data => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error());
  }

  static save(userInfo) {
    user.id.push(userInfo.id);
    user.name.push(userInfo.name);
    user.password.push(userInfo.password);
    return { syccess: true };
  }
}

module.exports = UserStorage;
