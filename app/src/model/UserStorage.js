'use strict';

class UserStorage {
  static #users = {
    id: ['test1', 'test2', 'test3'],
    password: ['1234', '12345', '123456'],
    name: ['최부장', 'ayden', '나천재'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static save(userInfo) {
    const user = this.#users;
    user.id.push(userInfo.id);
    user.name.push(userInfo.name);
    user.password.push(userInfo.password);
    return { syccess: true };
  }
}

module.exports = UserStorage;
