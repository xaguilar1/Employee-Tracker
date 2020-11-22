const util = require("util");
const mysql = require("mysql");


const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "diegojoy777",
  database: "employee_trackerDB"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected as " + connection.threadId);
})

connection.query = util.promisify(connection.query);

module.exports = connection;
