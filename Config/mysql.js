const mysql = require('mysql');

let connection;

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: '2104-nfs'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
})

module.exports = connection;
