import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import imageLoc from '../config/imagesLocation';

function Finish({navigation}) {
  setTimeout(() => navigation.navigate("Cards"),4000);

    return (
      <View style={styles.background}>
        <Image source={imageLoc.finishPicture} style={styles.img}/>
      </View>

        
    );
}
const styles = StyleSheet.create ({
  background : {     
    alignItems : 'center',  
    justifyContent:'center', 
    flex:1, 
  },  
  img : {
    flex: 1,
    resizeMode: "contain", 
    }
})
export default Finish;