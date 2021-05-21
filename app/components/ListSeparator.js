import React from 'react';
import { View, StyleSheet } from 'react-native';
import defaultProps from '../config/defaultProps';

function ListSeparator() {
    return (
        <View style={style.separator}/>
    );
}

const style=StyleSheet.create({
    separator:{
        height:5,
        width:"100%",
        backgroundColor:defaultProps.colors.secondBackground,
    }
})

export default ListSeparator;