var mysql = require("mysql");
var conn = mysql.createConnection({
    host: "localhost", // assign your host name
    user: "root", //  assign your database username
    password: "system", // assign your database password
    database: "dbms", // assign database Name
});

conn.connect(function (err) {
    if (err) throw err;
    console.log("Database is connected successfully !");
});

module.exports = conn;
