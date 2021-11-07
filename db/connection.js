
const mysql = require('mysql2');

//connect to DB
const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: 'BradIsRad1!',
    database: 'election'
    },
    console.log('Connected to election database.')
    );

module.exports = db;