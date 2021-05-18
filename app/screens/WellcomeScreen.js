import React from 'react';
import {
    Image,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';

import defaultProps from '../config/defaultProps';
import imageLoc from '../config/imagesLocation';



function WellcomeScreen({navigation}) {
  setTimeout(() => navigation.navigate("Autonav"),2000);

  return( 
    
    <View style={styles.background}>
      <Image style={styles.logo} source={imageLoc.logo} />             
    </View> 
  )
}

export default WellcomeScreen;
    
const styles = StyleSheet.create ({
  
    background : {    
         
      alignItems : 'center',
       justifyContent:'center',    
      backgroundColor: defaultProps.colors.firstBackground, 
      flex: 1,
    },  

    logo : {    
      width : Dimensions.get('screen').width - 20,
      height : Dimensions.get('screen').width - 20,        
    }
  })