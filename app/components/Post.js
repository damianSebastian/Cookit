import React from 'react';
import { Image, View, StyleSheet, Dimensions} from 'react-native';

import AppText from './AppText';
import defaultProps from '../config/defaultProps';
import { ScrollView } from 'react-native-gesture-handler';

function Post({title,image,content}) {
    return (
        <View style={styles.card}>
            
            <AppText style={defaultProps.titletext} text={title}/>

            <View style={{backgroundColor:defaultProps.colors.secondBackground}}>
                <Image source={image} style={styles.image} resizeMode="contain"/>
            </View>

            <View style={styles.info}>
                <ScrollView>
                    <AppText text={content} style={defaultProps.descriptionText}/>
                    
                </ScrollView>
            </View>
        </View>
    )
}

export default Post;

const styles = StyleSheet.create({
    card :{
      backgroundColor : defaultProps.colors.firstBackground,
      borderRadius: 5,    
      marginVertical:5,
      overflow:'hidden',
      //height: 600,
      width: Dimensions.get("screen").width,
        
    },
    image:{
        height: 350,
        width: Dimensions.get("window").width,
    },
    info:{
        alignSelf:'flex-start',
         maxHeight:150,
        minHeight:50,
    },
  })