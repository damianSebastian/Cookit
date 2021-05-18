import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PresentationProductScreen from './PresentationProductScreen';
import TutorialScreen from './TutorialScreen';
import defaultProps from '../config/defaultProps';
import Finish from './Finish'
import TabNavigator from '../components/Tab';

const Stack = createStackNavigator();

const AutoNav = () => (
    <Stack.Navigator initialRouteName="Cards" mode="modal">
        
        <Stack.Screen name="Cards" component={TabNavigator} options={{title: "Cook your egg",
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
          <Stack.Screen name ="Finish" component= {Finish}
           options={{headerShown: false}}/>
           
    </Stack.Navigator>
)


export default AutoNav;