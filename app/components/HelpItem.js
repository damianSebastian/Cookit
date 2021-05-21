import React from 'react';

import { View, StyleSheet, Image  } from 'react-native';
import defaultProps from '../config/defaultProps';
import AppText from './AppText';

function HelpItem({image, description}) {

    return(
        <View style={styles.container}>
            <Image source={image}style={styles.image}  resizeMode="contain"/>
            <AppText text={description} style={defaultProps.titletext}/>
        </View>
    )
}
export default HelpItem;

const styles = StyleSheet.create({
        container:{
            width: "100%",
            height:100,
            flexDirection:'row',
            backgroundColor:  defaultProps.colors.firstBackground,
            alignItems:'center',
            paddingHorizontal:10,
        },

        image :{
            height:70,           
            width:60,
        },
  })