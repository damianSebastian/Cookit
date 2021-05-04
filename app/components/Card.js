import React from 'react';
import {View, StyleSheet, Image,Text, TouchableOpacity} from 'react-native';

import defaultProps from '../config/defaultProps';
import imageLoc from '../config/imagesLocation';

function Card({title, subtitle, image, onPress,showBadge}) {

  let badge;
  if (showBadge) {
    badge= <Image 
    source={imageLoc.finish}
    resizeMode='contain'
    style={styles.cookStatus}
    /> 
  } else {
    badge= <Image 
    source={imageLoc.step1}
    resizeMode='contain'
    style={styles.cookStatus}
    />
  }

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={image} style={styles.image}/>            
            
            <View style={styles.detailContainer}>
              <View>
                <Text style={defaultProps.mainText}>{title}</Text>
                <Text style={defaultProps.descriptionText}>{subtitle}</Text>               
              </View>
                {badge}
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