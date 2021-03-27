import React from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';
import MyButton from '../components/MyButton';
import defaultProps from '../config/defaultProps';

function WellcomeScreen(props) {
  return(
      
        <View style={firstStyle.background}>
          <View style ={firstStyle.logoAndText}>
            <Image style={firstStyle.logo} source={require('../assets/cookit_logo.png')}></Image>
            <Text style={firstStyle.text}>O aplicatie impresionanta!</Text>
          </View>
          <MyButton title="Login" />
          <MyButton title="Register" />
  
        </View>
  
      )
}

export default WellcomeScreen;
    
const firstStyle = StyleSheet.create ({
    background : {    
      width : "100%",
      height : "100%",
      justifyContent: 'flex-end',
      alignItems : 'center',
      backgroundColor: defaultProps.colors.mainBackground, 
    },  
    logoAndText :{
      position : 'absolute',
      top: 150,  
      alignItems: 'center', 
    },
    logo : {    
      width : 100,
      height: 100, 
    },
    text : {
      fontSize : 20,
      fontWeight : 'bold',  
      margin : 10, 
      color : defaultProps.text,    
    },
  })