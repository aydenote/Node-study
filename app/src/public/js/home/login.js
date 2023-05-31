'use strict';

const id = document.querySelector('#id'),
  password = document.querySelector('#pw'),
  loginBtn = document.querySelector('button');

const clickLogin = () => {
  const req = {
    id: id.value,
    password: password.value,
  };

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });
};

loginBtn.addEventListener('click', clickLogin);
