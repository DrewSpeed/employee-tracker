const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'admin1',
    database: 'employees'
});

module.exports = db;

