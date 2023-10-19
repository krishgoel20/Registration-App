// server.js
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Your Mongoose User Model

const app = express();

// models/User.js
const userSchema = new mongoose.Schema({
  Username: String,
  Password: String,
  Email_ID: String, // Store hashed passwords
});

module.exports = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:3000/User_Registration_System', {
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

const uri = 'mongodb://localhost:3000/User_Registration_System';

async function insert() {
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
        // A new user has been registered; can perform updates here
        console.log('New user registered:', change.fullDocument);
        // Perform update operations here
      }
    });
  } 
  catch (error) 
  {
    console.error('Error watching for changes:', error);
  }
}

insert();

async function deletion() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try
  {
    await client.connect();
    const db = client.db();
    const collection = db.collection('users');

    const changeStream = collection.watch();

    changeStream.on('change', (change) => {
      if (change.operationType === 'deletion')
      {
        // A new user has been registered; can perform updates here
        console.log('New user registered:', change.fullDocument);
        // Perform update operations here
      }
    });
  } 
  catch (error) 
  {
    console.error('Error watching for changes:', error);
  }
}

deletion();

async function read() {
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
        // A new user has been registered; can perform updates here
        console.log('New user registered:', change.fullDocument);
        // Perform update operations here
      }
    });
  } 
  catch (error) 
  {
    console.error('Error watching for changes:', error);
  }
}

read();

async function update() {
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
        // A new user has been registered; can perform updates here
        console.log('New user registered:', change.fullDocument);
        // Perform update operations here
      }
    });
  } 
  catch (error) 
  {
    console.error('Error watching for changes:', error);
  }
}

update();

async function search() {
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
        // A new user has been registered; can perform updates here
        console.log('New user registered:', change.fullDocument);
        // Perform update operations here
      }
    });
  } 
  catch (error) 
  {
    console.error('Error watching for changes:', error);
  }
}

search();