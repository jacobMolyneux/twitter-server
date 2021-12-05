const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TweetSchema = Schema({
  author: { type: String, required: true },
  text: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: [140, "Tweets can only be 140 Characters"],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Tweet", TweetSchema);
