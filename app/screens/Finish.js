import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import AppText from '../components/AppText';
import defaultProps from '../config/defaultProps';
import imageLoc from '../config/imagesLocation';


function Finish({navigation}) {
  setTimeout(() => navigation.navigate("Cards"),4000);

    return (

        <View style={styles.background}>
          <AppText text="Finish screen"/>             

          <Image style={styles.logo} source={imageLoc.finish} resizeMode="contain"></Image> 
        </View> 

        
    );
}
const styles = StyleSheet.create ({
  background : {     
    alignItems : 'center',  
    justifyContent:'center',
    backgroundColor: defaultProps.colors.firstBackground,  
    flex:1, 
  },  
  logo : {    
    width : 400,
    height : 400,   
    margin: 20,
  }
})
export default Finish;