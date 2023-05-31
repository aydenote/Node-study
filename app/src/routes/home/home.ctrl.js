'use strict';

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
};

const users = {
  id: ['test1', 'test2', 'test3'],
  password: ['1234', '12345', '123456'],
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const password = req.body.password;
    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        response.success = true;
        return res.json(response);
      }
    }
    response.success = false;
    response.msg = '로그인에 실패하셨습니다.';
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
