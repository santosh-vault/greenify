// routes/auth.route.js
const express = require("express");
const router = express.Router();
const { login, register, getUserDetails  } = require("../controllers/auth.controller");
const authMiddleware = require('../middleware/auth.middleware');

router.post("/register", register);
router.post("/login", login);
router.get("/user", authMiddleware, getUserDetails);


module.exports = router;
