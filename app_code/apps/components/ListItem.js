import React from 'react';
import { View, Image, Text,StyleSheet, TouchableHighlight} from 'react-native';


import colors from '../config/colors';

function ListItem({profileImage,name,nameDetalis, onPress}) {
    return (
        
            <TouchableHighlight 
                underlayColor={colors.cardBackground}
                onPress={onPress}>
                <View style={style.profile}>
                    <Image source={profileImage} style={{width: 80, height:"100%"}} resizeMode="contain"/>
                    <View>
                        <Text style={style.name}>{name}</Text>
                        <Text style={style.nameDetalis}>{nameDetalis}</Text>
                    </View>
                </View>
            </TouchableHighlight>

       

        
    );
}

const style=StyleSheet.create({
    profile:{
        height: 70,
        width:"100%",
        margin:10,
        flexDirection: 'row',
        justifyContent: 'flex-start',   
        
    },
    name:{
        fontSize: 18,
        fontWeight:'bold',
        color:colors.text,

    },
    nameDetalis:{
        fontSize:15,
        color:colors.gray,
    }
})


export default ListItem;