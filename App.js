import React from 'react';
import { NavigationContainer} from '@react-navigation/native';

import AutoNav from './app/screens/AutoNav';

export default function App() {
  return (
    <NavigationContainer >
      <AutoNav />
    </NavigationContainer>   
  );
}