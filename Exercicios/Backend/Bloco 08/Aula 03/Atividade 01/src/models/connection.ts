import mysql from 'mysql2/promise';
// require('dotenv').config();

export default mysql.createPool({
  // host: process.env.MYSQL_HOST || 'localhost',
  // user: process.env.MYSQL_USER || 'root',
  // password: process.env.MYSQL_PASSWORD,
  // database: process.env.MYSQL_DATABASE
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'TypeScriptExpress',
});