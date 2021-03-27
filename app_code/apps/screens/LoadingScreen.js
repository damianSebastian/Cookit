import React from 'react';
import {View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';


function LoadingScreen(props) {
    return (
        <View style={style.backgound}>
            <Image source={require('../assets/cookit_logo.png')}/>
        </View>
    );
}
const style=StyleSheet.create({
   backgound: {
       backgroundColor: colors.mainBackground,
       justifyContent: 'center',
       alignItems:'center',
   }
})

export default LoadingScreen;