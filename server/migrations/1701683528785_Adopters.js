/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable("Adopters", {
        Adopter_id: "id",
        Name: {
            type:"varchar(255)",
        },
        Phone: {
            type: "varchar(20)"
        },

    })
};

exports.down = pgm => {
    pgm.dropTable("Adopters");
};
