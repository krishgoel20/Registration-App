// screens/ProfileScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>E-mail: {email}</Text>
    </View>
  );
};

export default ProfileScreen;