import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WellcomeScreen from './WellcomeScreen';
import AutoNav from './AutoNav';

const Stack = createStackNavigator();

const AppNav = () => (
    <Stack.Navigator backBehavior='none' initialRouteName="Wellcome" mode="modal">
        <Stack.Screen name="Wellcome" component ={WellcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Autonav" component={AutoNav} options={{headerShown:false}}/>           
    </Stack.Navigator>
)


export default AppNav;