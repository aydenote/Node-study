'use strict';

const id = document.querySelector('#id'),
  name = document.querySelector('#name'),
  password = document.querySelector('#pw'),
  confirmPw = document.querySelector('#confirm-pw'),
  registerBtn = document.querySelector('#button');

const clickregister = () => {
  if (!id.value) return alert('아이디를 입력해주세요.');
  if (password.value !== confirmPw.value) return alert('비밀번호가 일치하지 않습니다.');

  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
  };

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
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch(err => {
      console.error(new Error('회원가입 중 에러 발생'));
    });
};

registerBtn.addEventListener('click', clickregister);
