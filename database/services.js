async function getUserData(connection, email) {
	const [results] = await connection.query(`SELECT * FROM users WHERE username = "${email}"`);
	return results;
}

async function insertIntoUserDatabase(connection, email, password) {
	const query = "INSERT INTO users (username, password) VALUES (?, ?)";
	return await connection.execute(query, [email, password]);
}
module.exports = { getUserData, insertIntoUserDatabase };
