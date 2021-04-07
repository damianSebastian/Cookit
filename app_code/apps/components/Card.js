import React from 'react';
import {View, StyleSheet, Image,Text, TouchableOpacity} from 'react-native';

import defaultProps from '../config/defaultProps';

function Card({title, subtitle, image, onPress}) {
    return (
        <TouchableOpacity style={style.card} onPress={onPress}>
            <Image source={image} style={style.image}/>
            <View style={style.detailContainer}>
                <Text style={defaultProps.mainText}>{title}</Text>
                 <Text style={defaultProps.descriptionText}>{subtitle}</Text>
            </View>
            

        </TouchableOpacity>
    );
}

export default Card;

const style=StyleSheet.create({
    card :{
      backgroundColor : defaultProps.colors.secondBackground,
      borderRadius: 15,    
      margin:20,
      overflow:'hidden',     
    },
    image: {
        width:"100%",
        height: 200,
    },
    detailContainer:{
      padding:10,
    }
  })