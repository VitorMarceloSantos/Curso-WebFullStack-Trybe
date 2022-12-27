import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();
// Foi utilizado o docker, as variaveis foram declaradas no docker-compose, por isso não se faz o uso do arquivo .env
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
}); // sua conexão NÃO deve ter o database, este deve ser especificado em cada query

export default connection;