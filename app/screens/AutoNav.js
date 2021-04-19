import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WellcomeScreen from './WellcomeScreen';
import CardScreen from './CardScreen';
import PresentationProductScreen from './PresentationProductScreen';
import TutorialScreen from './TutorialScreen';
import defaultProps from '../config/defaultProps';
import Finish from './Finish'

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
         <Stack.Screen name="Tutorial" component ={TutorialScreen}
         options={{title: "Cook your egg",
         headerTitleAlign: 'center',
         headerLeft: false,
          headerStyle:{backgroundColor: defaultProps.colors.lightButton, height: 60}}}/>
          <Stack.Screen name ="Final" component= {Finish}
           options={{headerShown: false}}/>
    </Stack.Navigator>
)


export default AutoNav;