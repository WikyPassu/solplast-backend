const mysql = require("mysql2/promise");
const { MYSQL_URI } = require("../config/config");

exports.executeQuery = async query => {
  let connection;
  try {
    connection = await mysql.createConnection(MYSQL_URI);
    console.log("MySQL Connected");
    const [results] = await connection.execute(query);
    console.log("Query Executed");
    return results;
  } catch (err) {
    throw new Error(err);
  } finally {
    if(connection) {
      connection.end();
      console.log("Connection Ended");
    }
  }
};