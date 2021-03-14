import React from 'react';
import {
    ImageBackground,
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';
import MyButton from '../components/MyButton';
import colors from '../config/colors';
import MyColors from '../config/colors';


function WellcomeScreen(props) {
  return(
      
        <View style={firstStyle.background}
        >
          <View style ={firstStyle.logoAndText}>
            <Image style={firstStyle.logo} source={require('../assets/logo.png')}></Image>
            <Text style={firstStyle.text}>O aplicatie impresionanta!</Text>
          </View>
          <MyButton title="Login"/>
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
      backgroundColor: colors.cardBackground,
      
      
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
      color : colors.text,
      
    },
  })