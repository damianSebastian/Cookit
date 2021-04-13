import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WellcomeScreen from '../screens/WellcomeScreen';
import CardScreen from '../screens/CardScreen';
import PresentationProductScreen from '../presentationScreens/PresentationProductScreen';
import TutorialScreen from '../screens/TutorialScreen';
import TutorialNavigationCookOne from './TutorialNavigationCookOne';
import defaultProps from '../config/defaultProps';

const Stack = createStackNavigator();

const AutoNav = () => (
    <Stack.Navigator initialRouteName="Wellcome" mode="modal">
        <Stack.Screen name="Wellcome" component ={WellcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Cards" component ={CardScreen} 
        options={{title: "Cook your egg",
        headerLeft: false,
        headerTitleAlign: 'center',
         headerStyle:{backgroundColor: defaultProps.colors.lightButton , height: 60}}}/>
        <Stack.Screen name="Presentation" component ={PresentationProductScreen}
        options={{title: "Cook your egg",
        headerTitleAlign: 'center',
        headerLeft: false,
         headerStyle:{backgroundColor: defaultProps.colors.lightButton, height: 60}}} />
         <Stack.Screen name="TutorialOne" component ={TutorialNavigationCookOne} options={{headerShown: false}}/> 
         {/* // aici am nevoie de alt navigator, cate unul pt fiecare card */}
         
          {/* <Stack.Screen name="Tutorial" component ={TutorialScreen} // aici am nevoie de alt navigator, cate unul pt fiecare card
         options={{title: "Cook your egg",
         headerTitleAlign: 'center',
          headerStyle:{backgroundColor: defaultProps.colors.lightButton}}}/> */}
    </Stack.Navigator>
)


export default AutoNav;