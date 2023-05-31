'use strict';

const id = document.querySelector('#id'),
  name = document.querySelector('#name'),
  password = document.querySelector('#pw'),
  confirmPw = document.querySelector('#confirm-pw'),
  registerBtn = document.querySelector('#button');

const clickregister = () => {
  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
    confirmPw: confirmPw.value,
  };

  console.log(req);

  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        location.href = '/login';
      } else {
        alert(res.msg);
      }
    })
    .catch(err => {
      console.error(new Error('회원가입 중 에러 발생'));
    });
};

registerBtn.addEventListener('click', clickregister);
