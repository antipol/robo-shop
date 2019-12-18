const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/login", userController.login);
router.get("/signup", userController.signup);
router.get("/profile", userController.profile);

module.exports = router;
