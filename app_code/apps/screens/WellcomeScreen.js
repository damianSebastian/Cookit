import React from 'react';
import {
    Image,
    View,
    StyleSheet
} from 'react-native';

import MyButton from '../components/MyButton';
import defaultProps from '../config/defaultProps';
import image from '../config/imagesLocation';

function WellcomeScreen({navigation}) {
  return(
      <View style={styles.background}>
        <Image style={styles.logo} source={image.logo} resizeMode='contain'></Image>
          
        <MyButton title="Start" size={140} onPress={() => navigation.navigate("Cards")}/>
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
      bottom: 100, 
    }
  })