import React from 'react';

import TutorialScreen from '../../screens/TutorialScreen';
import image from '../../config/imagesLocation';
import tutorialData from '../../config/tutorialData';

function StepOne({navigation}) {
    return (
        <TutorialScreen 
            text={tutorialData.firstCook.stepTwo}
            image={image.tel}
            previosuOnPress={() => navigation.navigate("Pasul1")} // acest buton trebuie sa ne dea un pas inapoi
        />
        
    );
}


export default StepOne;