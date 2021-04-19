import React from 'react';
import { Text } from 'react-native';

import defaultProps from '../config/defaultProps';


function AppText({text, style=defaultProps.mainText}) {
    return <Text style={style}>{text}</Text>;
}

export default AppText;