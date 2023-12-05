const db = require("./connection");

const ADD_STAFF = "INSERT INTO \"Staff\" (\"Name\", \"Role\") VALUES ($1,$2)";
const GET_STAFF = "SELECT * FROM \"Staff\"";
const UPDATE_STAFF = "UPDATE \"Staff\" SET \"Name\" = $1, \"Role\" = $2 WHERE \"Staff_id\" = $3";
const DELETE_STAFF = "DELETE FROM \"Staff\" WHERE \"Staff_id\" = $1";

const create_staff = (Name, Role) => { 
    return db.none(ADD_STAFF, [Name, Role]);
}

const get_staff = () => {
    return db.any(GET_STAFF);
}

const update_staff = (Name, Role, Staff_id) => {
    return db.none(UPDATE_STAFF, [Name, Role, Staff_id]);
}

const delete_staff = (Staff_id) => {
    return db.none(DELETE_STAFF, [Staff_id]);
}

module.exports = {
    create_staff,
    get_staff,
    update_staff,
    delete_staff
}