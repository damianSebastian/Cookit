import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import StepOne from './FIrstCook.js/StepOne';
import StepTwo from './FIrstCook.js/StepTwo';
import defaultProps from '../config/defaultProps';

const Stack = createStackNavigator();

const TutorialNavigationCookOne = () => (
    <Stack.Navigator initialRouteName="Pasul1">
        <Stack.Screen name="Pasul1" component={StepOne} options={{title: "Cook your egg",
        headerLeft: false,
        headerTitleAlign: 'center',
         headerStyle:{backgroundColor: defaultProps.colors.lightButton , height: 60}}}/>
        <Stack.Screen name="Pasul2" component={StepTwo} options={{title: "Cook your egg",
        headerLeft: false,
        headerTitleAlign: 'center',
         headerStyle:{backgroundColor: defaultProps.colors.lightButton , height: 60}}}/>

         {/* aici trebuie adaugati toti pasiii */}
         
    </Stack.Navigator>
)

export default TutorialNavigationCookOne;