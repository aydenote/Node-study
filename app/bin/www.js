'use strict';

const app = require('../app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('express 서버 가동');
});
