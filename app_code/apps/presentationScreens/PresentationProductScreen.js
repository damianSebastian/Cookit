import React from 'react';
import { Image, View, StyleSheet,Text} from 'react-native';


import defaultProps from '../config/defaultProps';

import MyButton from '../components/MyButton';
import { ScrollView } from 'react-native-gesture-handler';
import AppText from '../components/AppText';
import ListSeparator from '../components/ListSeparator';

function PresentationProductScreen({route, navigation}) {
    const listing = route.params;
    return (
        <ScrollView>
            
                <Image style={style.image} resizeMode='cover' source={listing.image}/>

                <View style={style.description}>
                    <AppText style={defaultProps.titletext} text={listing.title}/>
                    <AppText style={defaultProps.mainText} text={listing.subtitle}/>
                </View>

                <View>
                    <ListSeparator/>
                    <AppText style={defaultProps.mainText} text={listing.ingredients}/>

                    <ListSeparator />

                    <AppText style={defaultProps.mainText} text={listing.ustensile}/>

                    <ListSeparator />

                    <AppText style={defaultProps.titletext} text={listing.totalTime}/>

                    <ListSeparator/>
                </View>


                <View style ={{ alignItems: 'center'}}>
                    <MyButton title="Start"
                        size={120}
                        onPress={() => navigation.navigate(listing.targetTutorialScreen)} 
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