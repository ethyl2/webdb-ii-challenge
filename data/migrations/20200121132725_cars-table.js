
exports.up = function(knex) {
    return knex.schema.createTable('cars-table', tbl => {
        tbl.increments();
        tbl.string('vin').notNullable().index();
        tbl.string('make').notNullable().index();
        tbl.string('model').notNullable();
        tbl.integer('mileage').notNullable();
        tbl.string('transmission');
        tbl.string('status');
        tbl.timestamps(true, true);
    });

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars-table');
};
