import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

 import Constants from 'expo-constants';
import colors from '../config/colors';

function Screen({children}) {
    return (
        <SafeAreaView style={style.container}>{children}</SafeAreaView>

    );
}
const style=StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.mainBackground,
    }
})

export default Screen;