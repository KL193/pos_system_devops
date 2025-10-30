const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express(); // Initialize the app

// ✅ Use correct body-parser methods
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ✅ Use consistent variable names
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.DB_URI || 'mongodb+srv://KL193:KAV%40123kav@cluster0.fvbxpjr.mongodb.net/pos_system_devops_db?appName=Cluster0';

// ✅ Fix typo: "mongose" → "mongoose"
// ✅ Fix misplaced .catch() (it must go with .then())
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(' Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(' DB Connection Error: ' + error);
  });

app.get('/test', (req,resp)=>{
    return resp.json({'message':'Server Started..'});
});

