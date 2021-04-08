import React from 'react';
import { Image, View, StyleSheet,Text, Alert } from 'react-native';

import ListItem from '../components/ListItem';
import defaultProps from '../config/defaultProps';
import AppIconButtons from '../components/AppIconButtons';
import Screen from '../components/Screen';
import MyButton from '../components/MyButton';

function PresentationProductScreen({image, profileImage, title,subtitle,name,nameDetalis, onPress }) {
    return (
        <Screen>
            <View >
                
                <Image style={style.image} resizeMode='cover' source={image}/>
                <View style={style.description}>
                    <Text style={defaultProps.titletext}>{title}</Text>
                    <Text style={defaultProps.mainText}>{subtitle}</Text>
                </View>
                <ListItem 
                name={name}
                nameDetalis={nameDetalis}
                profileImage={profileImage}
                onPress={() => Alert.alert("msg")}
                />
                        
            </View>

            <View style ={{ alignItems: 'center'}}>
                <MyButton title="Start"
                    size={120}
                    onPress={onPress} 
                    /> 
            </View>
        </Screen>

        

    );
}

export default PresentationProductScreen;

const style=StyleSheet.create({
    container:{
        flex:1,         
    },
    image :{
        height:300,
        width:"100%",
    },
    description:{
        paddingLeft: 20,
        height: 80,
        width:"100%",       
    },

})