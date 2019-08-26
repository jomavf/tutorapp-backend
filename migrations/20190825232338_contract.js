
exports.up = function(knex) {
    return knex.schema.createTable('contract',function (table){
        table.increments()
        table
            .integer('id_client')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('client')
            .onDelete('CASCADE')
        table
            .integer('id_tutor')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('tutor')
            .onDelete('CASCADE')
        table
            .integer('id_service')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('service')
            .onDelete('CASCADE')
        table.integer('price').notNullable()
        table.timestamps()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('contract')
};
