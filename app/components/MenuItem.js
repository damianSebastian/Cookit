import React from 'react';
import{StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import colors from '../config/colors';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function MenuItem({iconName, iconColor, text, onPress}) {
    return (
        <TouchableHighlight style={styles.background} onPress = {onPress} underlayColor={colors.button}>
           <View style={{flexDirection: 'row', alignItems:'center'}}>
                <MaterialCommunityIcons name={iconName} size={40} color={iconColor}/>
                <Text style={styles.text}>{text}</Text>

           </View>
            
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    background:{
        width: "100%",
        height: 70,
        backgroundColor: colors.firstBackground,
        justifyContent:'center',
        borderColor:colors.secondBackground,
        borderWidth: 3,
        

    },
    text:{
       fontSize:20,
       margin: 5,
       color:colors.text, 
       
    }
})

export default MenuItem;