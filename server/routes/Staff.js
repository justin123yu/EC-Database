const express = require("express");
const router = express.Router();
const Staff = require("../db/Staff");

router.get("/", (_req, res) => {
    let staff = Staff.get_staff();
    res.json(staff);
});

router.post("/", (req, res) => {
    let {Name, Role} = req.body;
    let staff = Staff.create_staff(Name, Role);
    res.json(staff);
});

router.delete("/:id", (req, res) => {
    let staff = Staff.delete_staff(req.params.id);
    res.json(staff);
});

router.patch("/:id", (req, res) => {
    let {Name, Role} = req.body;
    let staff = Staff.update_staff(Name, Role, req.params.id);
    res.json(staff);
});


module.exports = router;