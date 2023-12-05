const express = require("express");
const router = express.Router();
const Pets = require("../db/Pets");

router.get("/", async (req, res) => {
   let pets = await Pets.get_pets();
   res.json(pets);
});

router.post("/", async (req, res) => {
    let {Name, Type, Age, Breed} = req.body;
    let pet = await Pets.create_pet(Name, Type, Age, Breed);
    res.json(pet);
  });

router.patch("/:id", async (req, res) => {
    let {Name, Type, Age, Breed} = req.body;
    let pet = await Pets.update_pets(Name, Type, Age, Breed, req.params.id);
    res.json(pet);
});

router.delete("/:id", async (req, res) => {
    let pet = await Pets.delete_pets(req.params.id);
    res.json(pet);
});


module.exports = router;