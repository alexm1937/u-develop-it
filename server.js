
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//connect to DB
const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: 'BradIsRad1!',
    database: 'election'
    },
    console.log('Connected to election database.')
    );
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

//default res for any other req (not found)
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});