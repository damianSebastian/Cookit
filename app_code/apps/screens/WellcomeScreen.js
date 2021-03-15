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
            <Image style={firstStyle.logo}
             source={require('../assets/cookit_logo.png')}
             resizeMode="contain"/>
         
          <MyButton title="Login"/>
          <MyButton title="Register" />
  
        </View>
  
      )
}

export default WellcomeScreen;

    
const firstStyle = StyleSheet.create ({
    background : {
      
      flex:1,
      justifyContent: 'flex-end',
      alignItems : 'center',
      backgroundColor: colors.mainBackground,
    },
    logo : { 
      position : 'absolute',
      top: "25%",     
      width : 200,
      height: 200, 
    }
  })