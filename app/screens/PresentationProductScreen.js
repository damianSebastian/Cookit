import React from 'react';
import { Image, View, StyleSheet,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import defaultProps from '../config/defaultProps';
import MyButton from '../components/MyButton';
import AppText from '../components/AppText';
import ListSeparator from '../components/ListSeparator';

function PresentationProductScreen({route, navigation}) {
    const item = route.params;
    return (
        <ScrollView>
            
                <Image style={style.image} resizeMode='cover' source={item.image}/>

                <View style={style.description}>
                    <AppText style={defaultProps.titletext} text={item.title}/>
                    <AppText style={defaultProps.mainText} text={item.subtitle}/>
                </View>

                <View>
                    <ListSeparator/>
                    <AppText style={defaultProps.mainText} text={item.ingredients}/>

                    <ListSeparator />

                    <AppText style={defaultProps.mainText} text={item.ustensile}/>

                    <ListSeparator />

                    <AppText style={defaultProps.titletext} text={item.totalTime}/>

                    <ListSeparator/>
                </View>


                <View style ={{ alignItems: 'center'}}>
                    <MyButton title="Start"
                        size={120}
                        onPress={() => navigation.navigate("Tutorial",item)} 
                        /> 
                </View>
            
        </ScrollView>
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