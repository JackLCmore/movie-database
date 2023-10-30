const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'movie_db'
      },
      console.log('connection success!')
);

const questions = [
    {
        name:'',
        type:'',
        message:''
    },
];

db.query(``)