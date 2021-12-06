var express = require("express");
const router = express.Router();

const appController = require("../controllers/appController");

router.get("/", appController.home);

router.get("/profile", appController.profile);

router.get("/create-tweet", appController.create_tweet);

router.get("/like-tweet", appController.like_tweet);

router.get("/dislike-tweet", appController.dislike_tweet);

module.exports = router;
