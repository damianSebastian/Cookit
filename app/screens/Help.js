import React from 'react';
import {StyleSheet, Dimensions, FlatList, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import AppText from '../components/AppText';
import defaultProps from '../config/defaultProps';
import ustensile from '../config/imgUstensile';
import HelpItem from '../components/HelpItem';
import ListSeparator from '../components/ListSeparator';

function Help() {
    
    return (
        
            <FlatList
                data={ustensile}
                keyExtractor={(utensil) => utensil.id.toString()}
                renderItem={({item}) =>
                <HelpItem 
                image={item.image}
                description={item.description}/>} 
                ItemSeparatorComponent={() => <ListSeparator/>}
                />
                
       
      );
}
export default Help;

const styles=StyleSheet.create({
    container : {
    backgroundColor:defaultProps.colors.firstBackground,
    flex: 1,
},
    image:{
        marginTop: 15,
        width: 
        Dimensions.get("screen").width >= 500 ? 500: Dimensions.get("screen").width ,
        height:Dimensions.get("screen").width >= 500 ? 500: Dimensions.get("screen").width ,
        alignSelf:'center',
    },
})