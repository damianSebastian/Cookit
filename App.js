import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import CardScreen from './app_code/apps/screens/CardScreen';
import WellcomeScreen from './app_code/apps/screens/WellcomeScreen';

export default function App() {
  return (
    
    //<CardScreen/>
    <WellcomeScreen/>
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
