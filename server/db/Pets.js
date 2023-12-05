const db = require("./connection");

const ADD_PET = 'INSERT INTO \"Pets\" (\"Name\", \"Type\", \"Age\", \"Breed\") VALUES ($1,$2,$3,$4)';
const GET_PETS = "SELECT * FROM \"Pets\"";
const UPDATE_PETS = "UPDATE \"Pets\" SET Name = $1, Type = $2, Age = $3, Breed = $4 WHERE Pet_id = $5";
const DELETE_PETS = "DELETE FROM \"Pets\" WHERE Pet_id = $1";

const create_pet =  (Name, Type, Age, Breed) => {
    return  db.one(ADD_PET, [Name, Type, Age, Breed]);
}

const get_pets =  (_) => {
    return db.any(GET_PETS);
}

const update_pets = (Name, Type, Age, Breed, Pet_id) => {
    return db.none(UPDATE_PETS, [Name, Type, Age, Breed, Pet_id]);
}

const delete_pets = (Pet_id) => {
    return db.none(DELETE_PETS, [Pet_id]);
}

module.exports = {
    create_pet,
    get_pets,
    update_pets,
    delete_pets
}