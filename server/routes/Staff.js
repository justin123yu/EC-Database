const express = require("express");
const router = express.Router();
const Staff = require("../db/Staff");

router.get("/", async (_req, res) => {
    let staff = await Staff.get_staff();
    res.json(staff);
});

router.post("/", async (req, res) => {
    let {Name, Role} = req.body;
    await Staff.create_staff(Name, Role);
    res.json({message: "Staff created"});
});

router.delete("/:id", async (req, res) => {
    await Staff.delete_staff(req.params.id);
    res.json({message: "Staff deleted"});
});

router.patch("/:id", async (req, res) => {
    let {Name, Role} = req.body;
    Staff.update_staff(Name, Role, req.params.id);
    res.json({message: "Staff updated"});
});


module.exports = router;