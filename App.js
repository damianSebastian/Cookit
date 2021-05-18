import React from 'react';
import { NavigationContainer} from '@react-navigation/native';

import AppNav from './app/screens/AppNav';

export default function App() {
  return (  
      <NavigationContainer>
        <AppNav/> 
      </NavigationContainer>
  );
}