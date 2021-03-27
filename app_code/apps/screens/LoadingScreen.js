import React from 'react';
import {View, StyleSheet, Image } from 'react-native';

import defaultProps from '../config/defaultProps';


function LoadingScreen(props) {
    return (
        <View style={style.backgound}>
            <Image source={require('../assets/cookit_logo.png')}/>
        </View>
    );
}
const style=StyleSheet.create({
   backgound: {
       backgroundColor: defaultProps.colors.mainBackground,
       justifyContent: 'center',
       alignItems:'center',
   }
})

export default LoadingScreen;