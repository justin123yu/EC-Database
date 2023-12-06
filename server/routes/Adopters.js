const express = require("express");
const router = express.Router();
const Adopter = require("../db/Adopters");

router.get("/", async (_req, res) => {
    let adopter = await Adopter.get_adopters();
    res.json(adopter);
});

router.post("/", async (req, res) => {
    let {Name, Phone} = req.body;
    await  Adopter.create_adopter(Name, Phone);
    res.json({message: "Adopter created"});
});

router.delete("/:id", async (req, res) => {
    Adopter.delete_adopter(req.params.id);
    res.json({message: "Adopter deleted"});
});

router.patch("/:id", async (req, res) => {
    let {Name, Phone} = req.body;
    await Adopter.update_adopter(Name, Phone, req.params.id);
    res.json({message: "Adopter updated"});
});

module.exports = router;