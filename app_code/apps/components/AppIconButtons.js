import React from 'react';
import {TouchableWithoutFeedback, View, StyleSheet} from 'react-native';

import defaultProps from '../config/defaultProps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function AppIconButtons({iconName, onPress, size=30}) {
    return (
        <TouchableWithoutFeedback 
          onPress={onPress}>
              <View style={styles.continer}>
                <MaterialCommunityIcons name={iconName} 
                color={defaultProps.colors.purple}
                 size={size}
                 style={styles.back}/>
              </View>
            
            
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    back:{
        backgroundColor: defaultProps.colors.secondBackground,
        borderRadius:30,
    }
})

export default AppIconButtons;