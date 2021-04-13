import React from 'react';

import TutorialScreen from '../../screens/TutorialScreen';

import Screen from '../../components/Screen';
import image from '../../config/imagesLocation';

function StepOne({navigation}) {
    return (
        <TutorialScreen 
            text="pasul doi"
            image={image.tel}
            previosuOnPress={() => navigation.navigate("Pasul1")} // acest buton trebuie sa ne dea un pas inapoi
        />
        
    );
}


export default StepOne;