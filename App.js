import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import CardScreen from './app_code/apps/screens/CardScreen';
import WellcomeScreen from './app_code/apps/screens/WellcomeScreen';
import StatusScreen from './app_code/apps/screens/StatusScreen';
import MenuScreen from './app_code/apps/screens/MenuScreen';
export default function App() {
  return (
    
   // <CardScreen/>
   // <WellcomeScreen/>
    // <StatusScreen title="avram"
    // subtitle="sebastian"
    // image={require('./app_code/apps/assets/cookit_logo.png')}/>
    <MenuScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
