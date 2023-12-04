/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable("Pets", {
        Pet_id: "id",
        Name: {
            type:"varchar(255)",
        },
        Type: {
            type:"varchar(255)",
        },
        Age: {
            type:"integer",
        },
        Breed: {
            type:"varchar(255)",
        },
    })
};

exports.down = pgm => {
    pgm.dropTable("Pets");
};
