
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
    navigation.navigate("Presentation")}/>  //, {parametrii pentru fiecare card prezentat card prezentat}, vor fi mai multe carduri
    
}
//pot folosi route.prams.variabila pentru a da date de la un screen la altul
const Presentation =({route}) => {
    const navigation = useNavigation();
    return <PresentationProductScreen name="test" nameDetalis="test"
    image={require('./app_code/apps/assets/cookit_logo.png')}
    profileImage={require('./app_code/apps/assets/cookit_logo.png')}
    title="test"
    subtitle="test"
    onPress = {() => navigation.navigate("Tutorial")}
    />
}

const Tutorial = () => { return  <TutorialScreen />}

const MyStack = createStackNavigator();
const MyStackNavigator = () => (
  <MyStack.Navigator initialRouteName="Cards">
    <MyStack.Screen name="Cards" component={Cards} options={{title: "Cook your egg",
    headerTitleAlign: 'center',
     headerStyle:{backgroundColor: defaultProbs.colors.button}}}/>
    <MyStack.Screen name="Presentation" component={Presentation}
    options={{title: "Cook your egg",
    headerTitleAlign: 'center',
     headerStyle:{backgroundColor: defaultProbs.colors.button}}}/>
    <MyStack.Screen name="Tutorial" component={Tutorial} 
    options={{title: "Cook your egg",
    headerTitleAlign: 'center',
     headerStyle:{backgroundColor: defaultProbs.colors.button}}}/>

  </MyStack.Navigator>
)

export default function App() {

  return (
    <NavigationContainer>
      <MyStackNavigator />
    </NavigationContainer>

  );
}

