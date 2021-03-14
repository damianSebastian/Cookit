import React from 'react';
import { Image, View, StyleSheet,Text } from 'react-native';

import colors from '../config/colors';
import ListItem from './ListItem';


function PresentationProductScreen({image, profileImage, title,subtitle,name,nameDetalis }) {
    return (
        <View style={style.container}>
            <Image style={style.image} resizeMode='cover' source={image}/>
            <Text style={style.titleText}>{title}</Text>
            <Text style={style.subtitleText}>{subtitle}</Text>
            <ListItem 
            name={name}
            nameDetalis={nameDetalis}
            profileImage={profileImage}
            />
            
        </View>

    );
}

export default PresentationProductScreen;

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.cardBackground,       
    
    },
    image :{
        height:300,
        width:"100%",

    },
    titleText:{
        fontSize: 30,
        
        color:colors.text,
        padding: 10,
        paddingLeft: 20,
    },
    subtitleText:{
        fontSize: 20,      
        color:colors.gray,
        padding: 5, 
        paddingLeft: 20,
    },

})