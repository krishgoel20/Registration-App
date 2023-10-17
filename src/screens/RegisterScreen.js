// screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('YOUR_API_ENDPOINT', { name, email });
      // Handle the API response
      console.log(response.data);
      // Navigate to the Profile screen after successful registration
      navigation.navigate('Profile', { name, email });
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Name</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;