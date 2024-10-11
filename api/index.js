const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(console.log('connected to MongoDB')).catch((e) => console.log(e));


app.listen("5000", () => {
  console.log("Server is running on port 5000");
})