
import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import TutorialScreen from './app_code/apps/screens/TutorialScreen';
import CardScreen from './app_code/apps/screens/CardScreen';
import PresentationProductScreen from './app_code/apps/screens/PresentationProductScreen';
import defaultProbs from './app_code/apps/config/defaultProps';

const Cards = () => {
  const navigation = useNavigation();
  return <CardScreen onPress={() => 
    navigation.navigate("Presentation")}/>  // {parametrii pentru fiecare card prezentat card prezentat}, vor fi mai multe carduri
    
}
//pot folosi route.prams.variabila pentru a da date de la un screen la altul
const Presentation =() => {
    const navigation = useNavigation();
    return <PresentationProductScreen 
    image={require('./app_code/apps/covers/carbonara.jpg')}
    title="test"
    subtitle="test"
    onPress = {() => navigation.navigate("Tutorial")}
    />
}

const Tutorial = () => { 
  const navigation = useNavigation();
  return  <TutorialScreen text="ana are mere"
  nextOnPress={() => navigation.navigate("Cards")}
  />}

const MyStack = createStackNavigator();
const MyStackNavigator = () => (
  <MyStack.Navigator initialRouteName="Cards">
    <MyStack.Screen name="Cards" component={Cards} options={{title: "Cook your egg",
    headerTitleAlign: 'center',
     headerStyle:{backgroundColor: defaultProbs.colors.lightButton}}}/>
    <MyStack.Screen name="Presentation" component={Presentation}
    options={{title: "Cook your egg",
    headerTitleAlign: 'center',
     headerStyle:{backgroundColor: defaultProbs.colors.lightButton}}}/>
    <MyStack.Screen name="Tutorial" component={Tutorial} 
    options={{title: "Cook your egg",
    headerTitleAlign: 'center',
     headerStyle:{backgroundColor: defaultProbs.colors.lightButton}}}/>

  </MyStack.Navigator>
)

export default function App() {

  return (
    <NavigationContainer>
      <MyStackNavigator />
    </NavigationContainer>

  );
}

