'use strict';

const id = document.querySelector('#id'),
  password = document.querySelector('#pw'),
  loginBtn = document.querySelector('button');

const clickLogin = () => {
  const req = {
    id: id.value,
    password: password.value,
  };
  console.log(req);
};

loginBtn.addEventListener('click', clickLogin);
