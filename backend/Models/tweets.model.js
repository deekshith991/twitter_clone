

const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({

  Author: {
    type: String,
    require: true,
  },
  tweetMsg: {
    type: String,
    require: true,
  },
  createdAt:{
    type: String
  }
});

module.exports = mongoose.model("tweets",tweetSchema);

