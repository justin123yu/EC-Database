const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.get("/", (req, res) => {
    db.any("SELECT * FROM users")
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;