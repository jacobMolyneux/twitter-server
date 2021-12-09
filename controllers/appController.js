var Tweet = require("../models/tweetModel");

exports.home = function (req, res, next) {
  res.json("NOT IMPLEMENTED: HOMEPAGE");
};

exports.profile = function (req, res, next) {
  res.json("NOT IMPLEMENTED: PROFILE PAGE");
};
exports.create_tweet = function (req, res, next) {
  var tweet = new Tweet({
    author: req.body.author,
    text: req.body.text,
  }).save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

exports.like_tweet = function (req, res, next) {
  res.json("NOT IMPLEMENTED: LIKE TWEET ROUTE");
};

exports.dislike_tweet = function (req, res, next) {
  res.json("NOT IMPLEMENTED: DISLIKE TWEET ROUTE");
};
