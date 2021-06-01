import React from 'react';
import { View, StyleSheet, Dimensions} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultProps from '../config/defaultProps';
import AppText from './AppText';

function ListItem({iconName, text,style = defaultProps.mainText, size= 25, color = defaultProps.colors.secondBackground}) {
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name={iconName} color={color} size={size}/>
            <AppText text={text} style={style}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minHeight: 30,
        backgroundColor: defaultProps.colors.firstBackground,
        width:Dimensions.get("screen").width - 20,
        flexDirection:'row',
        alignItems: 'center',
        padding:3,
        paddingLeft: 10,
        flex:1,      
    },

})

export default ListItem;