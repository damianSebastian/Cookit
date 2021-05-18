import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import defaultProps from '../config/defaultProps';
import Help from '../screens/Help';
import Info from '../screens/Info';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CardScreen from '../screens/CardScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator  initialRouteName="Cook" 
    tabBarOptions={{
        activeTintColor: defaultProps.colors.firstBackground,
        inactiveTintColor:defaultProps.colors.firstBackground,
        activeBackgroundColor: defaultProps.colors.button,
        inactiveBackgroundColor: defaultProps.colors.lightButton,
    }}>
        <Tab.Screen name="Cook" component ={CardScreen} 
        options={{title: "Cook your egg",
        headerLeft: false,
        headerTitleAlign: 'center',
         headerStyle:{backgroundColor: defaultProps.colors.lightButton , height: 60},
         tabBarIcon:() => ( <MaterialCommunityIcons name="home" color={defaultProps.colors.firstBackground} size={35}/>)
            }}/>
        
        <Tab.Screen name="Info" component={Info} options={{tabBarIcon:() => (
            <MaterialCommunityIcons name="information" color={defaultProps.colors.firstBackground} size={35}/>
        )}}/>
        <Tab.Screen name ="Help" component={Help} options={{tabBarIcon:() => (
            <MaterialCommunityIcons name="help-box" color={defaultProps.colors.firstBackground} size={35}/>
        )}}/>
    </Tab.Navigator> 
)

export default TabNavigator;
