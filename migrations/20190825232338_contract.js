
exports.up = function(knex) {
    return knex.schema.createTable('contract',function (table){
        table.increments()
        table
            .integer('id_client')
            .unsigned()
            .notNullable()
        table
            .foreign('id_client')
            .references('id')
            .inTable('client')
            .onDelete('CASCADE')
        table
            .integer('id_tutor')
            .unsigned()
            .notNullable()
        table
            .foreign('id_tutor')
            .references('id')
            .inTable('tutor')
            .onDelete('CASCADE')
        table
            .integer('id_service')
            .unsigned()
            .notNullable()
        table
            .foreign('id_service')
            .references('id')
            .inTable('service')
            .onDelete('CASCADE')
        table.integer('price').notNullable()
        table.timestamps(false, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('contract')
};
