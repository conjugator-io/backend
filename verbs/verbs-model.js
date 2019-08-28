const db = require("../database/db-config.js");

module.exports = {
  findAll
};

function findAll() {
  return db("verbs");
}
