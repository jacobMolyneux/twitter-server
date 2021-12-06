const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const appRoutes = require("./routes/appRoutes");
const authRouter = require("./routes/authRoutes");
const User = require("./models/userModel");

const mongoDB =
  "mongodb+srv://jacob:Pigpen123@cluster0.7qrnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "mongo connection error"));

// took model schema from here --> if it gets fucked up put it back here

const app = express();
app.use(express.json());
app.set("views", __dirname);
app.set("view engine", "ejs");
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use("/", appRoutes);
app.use("/auth", authRouter);

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          // passwords match! log user in
          return done(null, user);
        } else {
          // passwords do not match!
          return done(null, false, { message: "Incorrect password" });
        }
      });
      return done(null, user);
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.listen(3000, () => console.log("app listenin on port 3000"));
