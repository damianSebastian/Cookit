import React from 'react';
import { useState } from 'react';
import {
    Image,
    View,
    StyleSheet
} from 'react-native';

import defaultProps from '../config/defaultProps';
import imageLoc from '../config/imagesLocation';

function WellcomeScreen({navigation}) {
  setTimeout(() => navigation.navigate("Cards"),2000);

  return( 
    <View style={styles.background}>
      <Image style={styles.logo} source={imageLoc.logo} resizeMode='contain'></Image>              
    </View> 
  )
}

export default WellcomeScreen;
    
const styles = StyleSheet.create ({
    background : {    
      width : "100%",
      height : "100%",
      justifyContent: 'flex-end',
      alignItems : 'center',
      backgroundColor: defaultProps.colors.firstBackground, 
    },  
    logo : {    
      width : 400,
      height: 400,
      bottom: "25%", 
    }
  })