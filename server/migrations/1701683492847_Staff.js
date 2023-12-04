/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('Staff', {
        Staff_id: "id",
        Name: {
            type: "varchar(255)",
        },
        Role: {
            type: "varchar(255)",
        },
        Date_Hired:{
            type: "timestamp",
            notNull: true,
            default: pgm.func("current_timestamp")
        }
    });
};

exports.down = pgm => {
    pgm.dropTable('Staff');
};
