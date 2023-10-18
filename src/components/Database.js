// server.js
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Your Mongoose User Model

const app = express();

// models/User.js

const userSchema = new mongoose.Schema({
  User_Email_ID: String,
  Password: String, // Make sure to store hashed passwords
});

module.exports = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:49418/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
// Registration endpoint - Registering a new user
app.post('/register', async (req, res) => {
  try 
  {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } 
  catch (error) 
  {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// server.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:49418/your-database-name';

async function watchUserRegistrations() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try 
  {
    await client.connect();
    const db = client.db();
    const collection = db.collection('users');

    const changeStream = collection.watch();

    changeStream.on('change', (change) => {
      if (change.operationType === 'insert') 
      {
        // A new user has been registered; you can perform updates here
        console.log('New user registered:', change.fullDocument);
        // Perform your update operations here
      }
    });
  } 
  catch (error) 
  {
    console.error('Error watching for changes:', error);
  }
}

watchUserRegistrations();