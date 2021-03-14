import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoadingScreen from './app_code/apps/screens/LoadingScreen';
import CardScreen from './app_code/apps/screens/CardScreen';

export default function App() {
  return (
    //<LoadingScreen/>
    <CardScreen/>
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
