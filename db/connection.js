const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'admin1',
    database: 'employeeDb'
});

module.exports = db;

