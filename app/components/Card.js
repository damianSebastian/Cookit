import React from 'react';
import {View, StyleSheet, Image,Text, TouchableOpacity} from 'react-native';

import defaultProps from '../config/defaultProps';


function Card({title, subtitle, image, onPress}) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={image} style={styles.image}/>            
            
            <View style={styles.detailContainer}>
              <View>
                <Text style={defaultProps.mainText}>{title}</Text>
                <Text style={defaultProps.descriptionText}>{subtitle}</Text>               
              </View>
                
            </View>
          
        </TouchableOpacity>
    );
}

export default Card;

const styles=StyleSheet.create({
    card :{
      backgroundColor : defaultProps.colors.firstBackground,
      borderRadius: 15,    
      margin:20,
      overflow:'hidden',     
    },
    image: {
        width:"100%",
        height: 200,
    },
    detailContainer:{
      paddingTop:5,
      paddingLeft: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cookStatus: {
      height: 50,
       width: 50,
       margin: 5,
     
   },
  })