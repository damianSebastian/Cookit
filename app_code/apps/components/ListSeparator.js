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
        height:2,
        width:"100%",
        backgroundColor:defaultProps.colors.button,
    }
})

export default ListSeparator;