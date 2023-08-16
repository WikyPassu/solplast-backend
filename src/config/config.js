require("dotenv").config();

const PORT = process.env.PORT || 5000;
const MYSQL_URI = process.env.MYSQL_URI;

module.exports = { PORT, MYSQL_URI };