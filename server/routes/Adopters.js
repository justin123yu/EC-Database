const express = require("express");
const router = express.Router();
const Adopter = require("../db/Adopters");

router.get("/", (_req, res) => {
    let adopter = Adopter.get_adopter();
    res.json(adopter);
});

router.post("/", (req, res) => {
    let {Name, Phone} = req.body;
    let adopter = Adopter.create_adopter(Name, Phone);
    res.json(adopter);
});

router.delete("/:id", (req, res) => {
    let adopter = Adopter.delete_adopter(req.params.id);
    res.json(adopter);
});

router.patch("/:id", (req, res) => {
    let {Name, Phone} = req.body;
    let adopter = Adopter.update_adopter(Name, Phone, req.params.id);
    res.json(adopter);
});

module.exports = router;