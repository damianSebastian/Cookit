import React from 'react';
import { 
    Text,
    StyleSheet,
    Alert,
    TouchableOpacity,
    } from 'react-native';
import colors from'../config/colors';

function MyButton({title, color ="button"}) {
    return(
      
          <TouchableOpacity style={[buttonStyel.LoginButton, {backgroundColor: colors[color]}]} onPress={() => Alert.alert(title)}>
            <Text style={buttonStyel.buttonText}>{title}</Text>

          </TouchableOpacity>

    )
}

export default MyButton;


const buttonStyel = StyleSheet.create ({
    
    LoginButton : {
      width : '90%',
      height : 50,
      backgroundColor: colors.button,
      borderRadius : 25,
      margin : 10,
      justifyContent : 'center',
      alignItems : 'center',
      
    },
    buttonText : {
      fontSize : 25,
      fontWeight : 'bold',
      color : colors.lightText,
    }
  })