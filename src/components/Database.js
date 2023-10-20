// server.js
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Mongoose User Model

const app = express();

// models/User.js
const userSchema = new mongoose.Schema({
  Username: String,
  Password: String,
  Email_ID: String, // Store Hashed Passwords
});

module.exports = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:3000/User_Registration_System', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Registration Endpoint - Registering a New User
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
const { MongoClient, ObjectID } = require('mongodb');

const uri = 'mongodb://localhost:3000/User_Registration_System';

async function createUser() {
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
        // A New User has been registered
        console.log('New user registered:', change.fullDocument);
      }
    });
  } 
  catch (error) 
  {
    console.error('Error watching for changes:', error);
  }
  finally
  {
    client.close();
  }
}

createUser();

async function readUser() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try 
  {
    await client.connect();
    const db = client.db();
    const collection = db.collection('users');

    const users = await collection.find({}).toArray();
    console.log('User data from the collection: ', users);
  } 
  catch (error) 
  {
    console.error('Error reading data:', error);
  }
  finally
  {
    client.close();
  }
}

readUser();

async function updateUser(userID, updatedData) {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try 
  {
    await client.connect();
    const db = client.db();
    const collection = db.collection('users');

    const result = await collection.updateOne(
      { _ID: ObjectID(userID) },
      { $set: updatedData }
    );

    if (result.updatedCount > 0)
    {
      console.log('User data updated successfully');
    }
    else
    {
      console.log('No user data updated');
    }
  } 
  catch (error) 
  {
    console.error('Error updating user data:', error);
  }
  finally
  {
    client.close();
  }
}

updateUser('21BME2347',{ email: 'android@gmail.com', name: 'Android', password: 'android_123' });

async function deleteUser(userID) {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try
  {
    await client.connect();
    const db = client.db();
    const collection = db.collection('users');

    const result = await collection.deleteOne(
      { _ID: ObjectID(userID) }
    );

    if (result.deletedCount > 0)
    {
      console.log('User data deleted successfully');
    }
    else
    {
      console.log('No user data deleted');
    }
  } 
  catch (error) 
  {
    console.error('Error deleting user data:', error);
  }
  finally
  {
    client.close();
  }
}

deleteUser('21BME2347');