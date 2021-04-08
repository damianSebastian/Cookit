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
      <React.Fragment>
        <View style={styles.background}>
          <View style ={styles.logoAndText}>
            <Image style={styles.logo} source={require('../assets/cookit_logo.png')} resizeMode='contain'></Image>
            <Text style={defaultProps.mainText}>O aplicatie impresionanta!</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <MyButton title="Login" size={140} />
          <MyButton title="Register" size={140} />
        </View>
      </React.Fragment>
  
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
    logoAndText :{
      position : 'absolute',
      top: 150,  
      alignItems: 'center', 
    },
    logo : {    
      width : 100,
      height: 160, 
    },
    buttons: {
      bottom: 60,
       position:'absolute',
        flexDirection: 'row', 
        justifyContent:'space-around', 
        width: "100%",
    }

  })