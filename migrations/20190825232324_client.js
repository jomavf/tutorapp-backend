
exports.up = function(knex) {
    return knex.schema.createTable('client',function (table){
        table.increments()
        table
            .integer('id_user')
            .unsigned()
            .notNullable()
        table
            .foreign('id_user')
            .references('id')
            .inTable('user')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('client')
};
