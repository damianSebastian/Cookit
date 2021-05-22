import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import defaultProps from '../config/defaultProps';

function Screen({children}) {
    return (
        <SafeAreaView style={style.container}>{children}</SafeAreaView>
    );
}
const style=StyleSheet.create({
    container:{
        backgroundColor: defaultProps.colors.secondBackground,
        flex:1,
    }
})

export default Screen;