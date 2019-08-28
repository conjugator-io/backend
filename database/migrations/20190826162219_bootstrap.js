exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();
      users.string("name", 255).notNullable();
      users
        .string("email", 255)
        .notNullable()
        .unique();
      users.string("password", 255).notNullable();
      users.integer("daily_goal").defaultTo(0);
      users.integer("daily_progress").defaultTo(0);
      users.integer("streak_days").defaultTo(0);
    })
    .createTable("verbs", verbs => {
      verbs.increments();
      verbs.text("verb").notNullable();
      verbs.text("conjugation").notNullable();
      verbs.text("tense").notNullable();
      verbs.text("form").notNullable();
      verbs.text("sentence").notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("verbs");
};
