import React from 'react';
import { Text } from 'react-native';


function AppText({text, style}) {
    return <Text style={style}>{text}</Text>;
}

export default AppText;