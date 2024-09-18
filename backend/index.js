
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
