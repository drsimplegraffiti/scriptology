const express = require("express");
const router = express.Router();

const { register } = require("../controllers/user.controllers");

router.post("/post", register);

module.exports = router;
