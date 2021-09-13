const express = require('express');
const router = express.Router();

const { create } = require("../controllers/hackController");

router.post("/create", create);

module.exports = router;