exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "Dave",
          email: "email@email.com",
          password: "password",
          daily_goal: 0,
          daily_progress: 0,
          streak_days: 0
        }
      ]);
    });
};
