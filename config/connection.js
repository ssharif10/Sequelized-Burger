//setting up the MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
 connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "burgers_db"
 });
}

//Making the connection
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

//exporting the connection for ORM to use.
module.exports = connection;

