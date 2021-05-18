import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import AppText from '../components/AppText';
import defaultProps from '../config/defaultProps';
import imagesLocation from '../config/imagesLocation';

function Help() {
    
    return (
        <ScrollView style={styles.container}>
            <AppText text="Help" style={[defaultProps.titletext,{margin:10, fontSize: 35}]}/>
            <Image style={styles.image} source={imagesLocation.logo} />

        </ScrollView>
  
          
      );
}
export default Help;
const styles=StyleSheet.create({
    container : {
    backgroundColor:defaultProps.colors.firstBackground,
    flex: 1,
},
    image:{
        marginTop: 15,
        width: 
        Dimensions.get("screen").width >= 500 ? 500: Dimensions.get("screen").width ,
        height:Dimensions.get("screen").width >= 500 ? 500: Dimensions.get("screen").width ,
        alignSelf:'center',
       

    },
})