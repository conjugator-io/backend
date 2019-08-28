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
      verbs.string("verb", 255).notNullable();
      verbs.string("conjugation", 255).notNullable();
      verbs.string("tense", 255).notNullable();
      verbs.string("form", 255).notNullable();
      verbs.string("sentence", 2500).notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("verbs");
};
