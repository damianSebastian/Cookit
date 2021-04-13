import React from 'react';

import TutorialScreen from '../../screens/TutorialScreen';
import image from '../../config/imagesLocation';
import tutorialData from '../../config/tutorialData';

function StepOne({navigation}) {
    return (
        <TutorialScreen 
            text={tutorialData.firstCook.stepOne}
            image={image.mixer}
            onPressStart={() => navigation.navigate("Pasul2")} //butonul de start trebue sa porneasca timerul, apoi dupa ce timpul e gata sa mearga la pasul urmator
        />
        
    );
}


export default StepOne;
