import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function ListSeparator() {
    return (
        <View style={style.separator}/>
    );
}

const style=StyleSheet.create({
    separator:{
        height:1,
        width:"100%",
        backgroundColor:colors.gray,
    }
})

export default ListSeparator;