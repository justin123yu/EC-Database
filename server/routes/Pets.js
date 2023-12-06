const express = require("express");
const router = express.Router();
const Pets = require("../db/Pets");

router.get("/", async (req, res) => {
   let pets = await Pets.get_pets();
   res.json(pets);
});

router.get("/:id", async (req, res) => {
    let pets = await Pets.get_pet(req.params.id);
    res.json(pets);
});

router.post("/", async (req, res) => {
    let {Name, Type, Age, Breed} = req.body;
    Pets.create_pet(Name, Type, Age, Breed);
    res.json({message: "Pet created"});
  });

router.patch("/:id", async (req, res) => {
    let {Name, Type, Age, Breed} = req.body;
    Pets.update_pets(Name, Type, Age, Breed, req.params.id);
    res.json({message: "Pet updated"});
});

router.delete("/:id", async (req, res) => {
    await Pets.delete_pets(req.params.id);
    res.json({message: "Pet deleted"});
});


module.exports = router;