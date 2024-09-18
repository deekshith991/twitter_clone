
console.log("[+] Booting the SERVER ");

const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');


// configurations
env.config();
const PORT = 3333;
const MongoUri = "mongodb://localhost:27017/twitter/";

// app configurations
const app = express();
app.use(express.json());

mongoose.connect(MongoUri);

const db = mongoose.connection;

db.on('error' , () => {
  console.log("[-] Error connecting Server");
})

db.once('open', () => {

  console.log("[+] connected to DB");

  app.listen(PORT, () => {
    console.log(`[+] Server Up at ${PORT}`);
  })
})


app.get ('/api/', async (req,res) => {
  await res.json({status:"online"}).status(200);
});

const tweetRoute = require('./api/Routes/tweetsRoute.js');
app.use("api/", tweetRoute);
