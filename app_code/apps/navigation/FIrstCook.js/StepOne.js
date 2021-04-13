import React from 'react';

import TutorialScreen from '../../screens/TutorialScreen';

import Screen from '../../components/Screen';
import image from '../../config/imagesLocation';

function StepOne({navigation}) {
    return (
        <TutorialScreen 
            text="primul pas"
            image={image.mixer}
            onPressStart={() => navigation.navigate("Pasul2")} //butonul de start trebue sa porneasca timerul, apoi dupa ce timpul e gata sa mearga la pasul urmator
        />
        
    );
}


export default StepOne;
