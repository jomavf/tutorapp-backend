
exports.up = function(knex) {
    return knex.schema.createTable('tutor',function (table){
        table.increments()
        table
            .integer('id_user')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('user')
            .onDelete('CASCADE')
        table.timestamps()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tutor')
};
