import React from 'react';
import { 
    Text,
    StyleSheet,
    TouchableOpacity,
    } from 'react-native';
import defaultProps from '../config/defaultProps';

function MyButton({title, onPress, width="80%", style=defaultProps.titletext}) {
    return(
      
          <TouchableOpacity style={[buttonStyel.LoginButton, {width:width}]}
           onPress={onPress}>
            <Text style={style}>{title}</Text>

          </TouchableOpacity>

    )
}

export default MyButton;

const buttonStyel = StyleSheet.create ({  
    LoginButton : {
      
      height : 50,
      backgroundColor: defaultProps.colors.button,
      borderRadius : 25,
      margin : 5,
      justifyContent : 'center',
      alignItems : 'center',
      alignSelf: 'center',   
    },
  })