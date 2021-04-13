
import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import defaultProbs from './app_code/apps/config/defaultProps';
import MessagesScreen from './app_code/apps/screens/MessagesScreen';
import AutoNav from './app_code/apps/navigation/AutoNav';
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: defaultProbs.colors.darkButton,
      activeTintColor: defaultProbs.colors.purple,
      inactiveBackgroundColor: defaultProbs.colors.firstBackground,

    }}>
    <Tab.Screen name="Cards" 
    component={MyStackNavigator}
    options={{
      tabBarIcon : ({size, color}) => <MaterialCommunityIcons name="home" 
        size={size} 
        color={color}/>
    }}
    />
    <Tab.Screen name ="Messages"
     component={MessagesScreen}
     options={{
       tabBarIcon :({size, color}) => <MaterialCommunityIcons 
       name="trophy-award"
       size={size}
       color={color}/>
     }}
     />
  </Tab.Navigator>
)

export default function App() {

  return (
    <NavigationContainer >
      <AutoNav />
    </NavigationContainer>
    

  );
}

