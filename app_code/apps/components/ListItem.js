import React from 'react';
import { View, Image, Text,StyleSheet, TouchableHighlight} from 'react-native';


import colors from '../config/colors';

function ListItem({profileImage, name,nameDetalis, onPress}) {
    return (
        
            <TouchableHighlight 
                underlayColor={colors.button}
                onPress={onPress}
                style={styles.profile}
                onPress={onPress}
                >
                <View style={styles.viewStyle}>
                    <Image source={profileImage} style={styles.imageStyle} resizeMode="contain"/>
                    <View style ={{marginLeft:10}}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.nameDetalis}>{nameDetalis}</Text>
                    </View>
                </View>
            </TouchableHighlight>

    );
}

const styles=StyleSheet.create({
    profile:{
        height: 100,
        width:"100%",
        
        marginTop:15,
        marginBottom:15,
   
        
    },
    viewStyle:{
        flexDirection: 'row',
        alignItems:'center', 
        backgroundColor:colors.cardBackground,
        flex: 1,
        
        
    },
    name:{
        fontSize: 18,
        fontWeight:'bold',
        color:colors.text,

    },
    nameDetalis:{
        fontSize:15,
        color:colors.gray,
    },
    imageStyle:{
        width: 80,
        height:"100%",
        borderRadius: 40,
    }
})


export default ListItem;