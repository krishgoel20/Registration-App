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
const { MongoClient, ObjectID } = require('mongodb');

const uri = 'mongodb://localhost:3000/User_Registration_System';

async function insertUser() {
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
  finally
  {
    client.close();
  }
}

insertUser();

async function readUser() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try 
  {
    await client.connect();
    const db = client.db();
    const collection = db.collection('users');

    const users = await collection.find({}).toArray();
    console.log('User data from the collection: ', users);

    /*const changeStream = collection.watch();

    changeStream.on('change', (change) => {
      if (change.operationType === 'read') 
      {
        // A new user has been registered; can perform updates here
        console.log('New user registered:', change.fullDocument);
        // Perform update operations here
      }
    });*/
  } 
  catch (error) 
  {
    console.error('Error reading data from the collection:', error);
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

    if (result.modifiedCount > 0)
    {
      console.log('User data updated successfully');
    }
    else
    {
      console.log('No user data updated');
    }

    /*const changeStream = collection.watch();

    changeStream.on('change', (change) => {
      if (change.operationType === 'insert') 
      {
        // A new user has been registered; can perform updates here
        console.log('New user registered:', change.fullDocument);
        // Perform update operations here
      }
    });*/
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

updateUser('YOUR_USER_ID',{ email: 'new-email@example.com', name: 'New Name' });

async function deleteUser(userID) {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try
  {
    await client.connect();
    const db = client.db();
    const collection = db.collection('users');

    const result = await collection.deleteOne({ _ID: ObjectID(userID) });

    if (result.deletedCount > 0)
    {
      console.log('User data deleted successfully');
    }
    else
    {
      console.log('No user data deleted');
    }

    /*const changeStream = collection.watch();

    changeStream.on('change', (change) => {
      if (change.operationType === 'deletion')
      {
        // A new user has been registered; can perform updates here
        console.log('New user registered:', change.fullDocument);
        // Perform update operations here
      }
    });*/
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

deleteUser('YOUR_USER_ID');