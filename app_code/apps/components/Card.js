import React from 'react';
import {View, StyleSheet, Image,Text, TouchableOpacity, Alert} from 'react-native';

import colors from '../config/colors';


function Card({title, subtitle, image, onPress}) {
    return (
        <TouchableOpacity style={style.card} onPress={onPress}>
            <Image source={image} style={style.image}
            resizeMode="contain"/>
            <View style={style.detailContainer}>
                <Text style={style.title}>{title}</Text>
                 <Text style={style.subtitle}>{subtitle}</Text>
            </View>
            

        </TouchableOpacity>
    );
}

export default Card;

const style=StyleSheet.create({
    card :{
      backgroundColor : '#fff',
      borderRadius: 15,
      
      margin:20,
      overflow:'hidden',
      //flexDirection: 'row',
      
    },
    image: {
        width:"100%",
        height: 200,

    },
    title:{
        fontSize: 25,
        fontWeight : 'bold',
        marginTop:5,
        color:colors.text,
    },
    subtitle:{
        fontSize: 20,
        marginTop:5,
        color:colors.gray,
        

    },
    detailContainer:{
      padding:10,
    }
  })