import React from 'react';
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';


import defaultProps from '../config/defaultProps';

function ListItem({profileImage,name,nameDetalis, onPress}) {
    return (
        
    <TouchableWithoutFeedback
            onPress={onPress}>
             
        <View style={style.profile}  > 
            <Image source={profileImage} style={{width: 90, height:"100%"}} resizeMode="contain"/>
            <View style={style.cont}>
                <Text style={defaultProps.mainText}>{name}</Text>
                <Text style={defaultProps.descriptionText}>{nameDetalis}</Text>
            </View>
       </View> 
    </TouchableWithoutFeedback>
    );
}

const style=StyleSheet.create({
    profile:{
        height: 80,
        width:"100%",
        marginTop:10,
        backgroundColor:defaultProps.colors.mainBackground,
        flexDirection: 'row',
        justifyContent: 'flex-start',       
    },
    cont:{
        
        flex:1,
        padding:10,
    }
})


export default ListItem;