const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/sign-up", authController.sign_up);

router.get("/sign-up", authController.sign_up);

router.get("/log-out", authController.log_out);

router.post("/log-in", authController.log_in);

module.exports = router;
