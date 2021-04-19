
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

// lucruri de discutat
// numele aplicatiei: suna mai bine cookit. Este usor sa pt utilizator sa inteleaga ca e vorba doar de oua
// schimbari de design a paginii wellcome
//schimbarea logoului
// de ce nu merge returnul cu if in tutorialScreen
