import React from 'react';
import {StyleSheet} from 'react-native';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import defaultProps from '../config/defaultProps';


function Finish() {
    return (
        <Screen>
            <View style={styles.background}>
                <Image style={styles.logo} source={imageLoc.finish} resizeMode='contain'></Image>
                <AppText text="Finish"/>              
            </View>
        </Screen>
        
    );
}
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
      bottom: "30%", 
    }
  })

export default Finish;