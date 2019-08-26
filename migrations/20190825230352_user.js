
exports.up = function(knex) {
  return knex.schema.createTable('user',function (table){
    table.increments()
    table.string('name',20).notNullable()
    table.string('lastname',20).notNullable()
    table.string('dni',8).notNullable()
    table.timestamps()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user')
};
