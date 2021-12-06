const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// post route to sign up
exports.sign_up = function (req, res, next) {
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    }).save((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });
};

exports.log_out = function (req, res) {
  app.get("/log-out", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};

// log in controller

exports.log_in = function (req, res, next) {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  });
};
