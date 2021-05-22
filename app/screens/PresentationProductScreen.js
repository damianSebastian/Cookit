import React from 'react';
import { Image, View, StyleSheet} from 'react-native';
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
              
                    <AppText style={[defaultProps.titletext, {marginLeft: 20}]} text={item.title}/>
                    <AppText style={[defaultProps.mainText, {marginLeft: 10}]} text={item.subtitle}/>
                
                    <ListSeparator/>
                    <AppText style={[defaultProps.titletext, {marginLeft: 20}]} text={"Ingredients"}/>
                    <AppText style={[defaultProps.mainText, {marginLeft: 10}]} text={item.ingredients}/>

                    <ListSeparator />

                    <AppText text="Ustensile:" style={[defaultProps.titletext,{marginLeft: 20}]}/>
                    <AppText text = {item.ustensile} style={[defaultProps.mainText,{marginLeft: 10}]}/>
                    
                    <View style={{flexDirection: 'row', flexWrap:'wrap'}}>
                            {item.imaginiUstensile.map((it) => 
                            <Image source={it.image} key={it.id} style={{height:70, width:70, margin: 10}} resizeMode="contain"/>)}
                    </View>

                    <ListSeparator />

                    <AppText style={defaultProps.titletext} text={item.totalTime}/>

                    <ListSeparator/>
                
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
    image :{
        height:300,
        width:"100%",
    },
})