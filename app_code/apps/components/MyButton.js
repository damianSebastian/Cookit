import React from 'react';
import { 
    Text,
    StyleSheet,
    TouchableOpacity,
    } from 'react-native';
import defaultProps from '../config/defaultProps';

function MyButton({title, onPress, size=100, style=defaultProps.titletext}) {
    return(
      
          <TouchableOpacity style={[buttonStyel.LoginButton, {width:size, height: size, borderRadius: size/2}]}
           onPress={onPress}>
            <Text style={style}>{title}</Text>

          </TouchableOpacity>

    )
}

export default MyButton;

const buttonStyel = StyleSheet.create ({  
    LoginButton : {
      backgroundColor: defaultProps.colors.button,
      margin : 5,
      justifyContent : 'center',
      alignItems : 'center',
      alignSelf: 'center',   
    },
  })