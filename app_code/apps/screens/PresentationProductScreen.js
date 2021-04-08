import React from 'react';
import { Image, View, StyleSheet,Text} from 'react-native';


import defaultProps from '../config/defaultProps';

import Screen from '../components/Screen';
import MyButton from '../components/MyButton';

function PresentationProductScreen({image,title,subtitle, onPress }) {
    return (
        <Screen>
            <Image style={style.image} resizeMode='cover' source={image}/>

            <View style={style.description}>
                <Text style={defaultProps.titletext}>{title}</Text>
                <Text style={defaultProps.mainText}>{subtitle}</Text>
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
        backgroundColor: defaultProps.colors.firstBackground,      
    },

})