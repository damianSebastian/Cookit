import React from 'react';
import { 
    Text,
    StyleSheet,
    TouchableOpacity,
    } from 'react-native';
import defaultProps from '../config/defaultProps';

function MyButton({title, color ="button", onPress}) {
    return(
      
          <TouchableOpacity style={[buttonStyel.LoginButton, {backgroundColor: defaultProps.colors[color]}]}
           onPress={onPress}>
            <Text style={defaultProps.titletext}>{title}</Text>

          </TouchableOpacity>

    )
}

export default MyButton;

const buttonStyel = StyleSheet.create ({  
    LoginButton : {
      width : '90%',
      height : 50,
      backgroundColor: defaultProps.colors.button,
      borderRadius : 25,
      margin : 5,
      justifyContent : 'center',
      alignItems : 'center',
      alignSelf: 'center',   
    },
  })