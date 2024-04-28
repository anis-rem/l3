import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "projet"
});

con.connect(function (err) {
    if (err) {
        console.log("something went wrong")
    } else {
        console.log("connected")
    }
});

export default con;
