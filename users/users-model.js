const db = require("../database/db-config.js");

module.exports = {
  addUser,
  findUser,
  findBy,
  findAll,
  update,
  remove
};

function addUser(user) {
  return db("users")
    .insert(user)
    .then(() => {
      return db("users")
        .where("email", user.email)
        .select("id", "name", "email")
        .first();
    });
}

function findUser(id) {
  return db("users")
    .where({ id })
    .select(
      "id",
      "name",
      "email",
      "daily_goal",
      "daily_progress",
      "streak_days"
    )
    .first();
}

function findBy(filter) {
  return db("users").where(filter);
}

function findAll() {
  return db("users").select(
    "id",
    "name",
    "email",
    "daily_goal",
    "daily_progress",
    "streak_days"
  );
}

async function update(changes, id) {
  await db("users")
    .where({ id })
    .update(changes)
    .select(
      "id",
      "name",
      "email",
      "daily_goal",
      "daily_progress",
      "streak_days"
    );
  return findUser(id);
}

function remove(id) {
  return db("users")
    .delete()
    .where({ "users.id": id });
}
