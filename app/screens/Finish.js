import React from 'react';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';

import AppText from '../components/AppText';
import defaultProps from '../config/defaultProps';
import imageLoc from '../config/imagesLocation';


function Finish({navigation}) {
  setTimeout(() => navigation.navigate("Cards"),4000);

    return (
      <View style={styles.background}>
        <Image source={imageLoc.finish} style={{flex: 1,
           resizeMode: "contain",
            justifyContent: "center",
            alignSelf:'center'}}/>
    </View>

        
    );
}
const styles = StyleSheet.create ({
  background : {     
    alignItems : 'center',  
    justifyContent:'center', 
    flex:1, 
  },  
  logo : {    
    width : 400,
    height : 400,   
    margin: 20,
  }
})
export default Finish;