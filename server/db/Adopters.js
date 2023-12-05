const db = require("./connection");

const ADD_ADOPTER = "INSERT INTO Adopters (Name, Phone) VALUES ($1,$2)";
const GET_ADOPTERS = "SELECT * FROM Adopters";
const UPDATE_ADOPTERS = "UPDATE Adopters SET Name = $1, Phone = $2 WHERE Adopter_id = $3";
const DELETE_ADOPTERS = "DELETE FROM Adopters WHERE Adopter_id = $1";

const create_adopter = (Name, Phone) => {
    return db.one(ADD_ADOPTER, [Name, Phone]);
}
const get_adopters = (_) => {
    return db.any(GET_ADOPTERS);
}
const update_adopter = (Name, Phone, Adopter_id) => {
    return db.none(UPDATE_ADOPTERS, [Name, Phone, Adopter_id]);
}
const delete_adopter = (Adopter_id) => {
    return db.none(DELETE_ADOPTERS, [Adopter_id]);
}

module.exports = {
    create_adopter,
    get_adopters,
    update_adopter,
    delete_adopter
}