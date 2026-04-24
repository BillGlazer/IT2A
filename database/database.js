const mysql = require("mysql2/promise");

async function createConnection() {
	return await mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "1234",
		database: "login",
	});
}
module.exports = { createConnection };
