import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import CardScreen from './app_code/apps/screens/CardScreen';
import WellcomeScreen from './app_code/apps/screens/WellcomeScreen';
import StatusScreen from './app_code/apps/screens/StatusScreen';
import MenuScreen from './app_code/apps/screens/MenuScreen';
import PresentationProductScreen from './app_code/apps/screens/PresentationProductScreen';
import TutorialScreen from './app_code/apps/screens/TutorialScreen';
export default function App() {
  return (
    
    <CardScreen/>                 
  //  <WellcomeScreen/>               
    // <StatusScreen title="avram"
    // subtitle="sebastian"
    // image={require('./app_code/apps/assets/cookit_logo.png')}/>     
  //  <MenuScreen/>         e ok   
  //  <PresentationProductScreen 
  //   image={require('./app_code/apps/assets/cookit_logo.png')}
  //   name="avram sebastian"
  //   nameDetalis="pregatar"
  //   profileImage={require('./app_code/apps/assets/cookit_logo.png')}
  //   subtitle="ou"
  //   title="mancare"
  //  />
  // <TutorialScreen text="Text"/>
  );
}

