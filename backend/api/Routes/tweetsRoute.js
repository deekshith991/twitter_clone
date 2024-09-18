

const express = require('express');
const router = express.Router();
const tweetmodel = require("../../Models/tweets.model.js");

router.post("/tweet", async (req,res)=> {


  try{

      const { Author , tweetMsg } = req.body;

      const newTweet = new tweetmodel({Author , tweetMsg});
      await newTweet.save();
      res.json({"success":true,"msg":"tweet saved"}).status(200);

  }catch(error){
    console.log("Error at tweet");
    console.log(error);
     res.json({"success":false ,"msg":"tweet not saved"}).status(400);
  }
});

module.exports = router;
