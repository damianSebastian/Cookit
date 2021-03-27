import React from 'react';
import {TouchableWithoutFeedback, View, StyleSheet} from 'react-native';

import defaultProps from '../config/defaultProps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function AppIconButtons({iconName, onPress}) {
    return (
        <TouchableWithoutFeedback style={styles.container}
          onPress={onPress}>
            
            <MaterialCommunityIcons name={iconName} color={defaultProps.colors.button} size={20}/>
            
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{
        height: 40,
        width: 40,
        backgroundColor: defaultProps.colors.mainBackground,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',

    }
})

export default AppIconButtons;