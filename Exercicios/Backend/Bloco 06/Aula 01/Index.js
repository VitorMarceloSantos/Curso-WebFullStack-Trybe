const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.MYSQL_PORT || 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));