var Tweet = require("../models/tweetModel");

exports.home = function (req, res, next) {
  res.render("index", { user: req.user });
};

exports.profile = function (req, res, next) {
  res.send("NOT IMPLEMENTED: PROFILE PAGE");
};
exports.create_tweet = function (req, res, next) {
  res.send("NOT IMPLEMENTED: NEW TWEET ROUTE");
};

exports.like_tweet = function (req, res, next) {
  res.send("NOT IMPLEMENTED: LIKE TWEET ROUTE");
};

exports.dislike_tweet = function (req, res, next) {
  res.send("NOT IMPLEMENTED: DISLIKE TWEET ROUTE");
};
