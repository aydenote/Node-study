const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'login-study.ct7wyqlvnc2i.ap-northeast-2.rds.amazonaws.com',
  user: 'admin',
  password: 'ghgh102030',
  database: 'login_stud',
});

db.connect();

module.exports = db;
