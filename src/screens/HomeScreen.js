// screens/HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Create" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default HomeScreen;