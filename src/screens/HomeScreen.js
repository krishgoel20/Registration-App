// screens/HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default HomeScreen;