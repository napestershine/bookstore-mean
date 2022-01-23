// step 1: import express
const express = require("express");
const controller = require("../controllers/book");

// step 2: create router
const router = express.Router();

// step 3: configure path
router.get("/", controller.getAll);

module.exports = router;
