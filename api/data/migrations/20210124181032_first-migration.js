exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('user_username', 200).notNullable().unique()
      users.string('user_password', 200).notNullable()
      users.string('user_phone', 320).notNullable().unique()
      users.timestamps(false, true)
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
}
