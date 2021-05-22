import React from 'react';
import {StyleSheet, Dimensions, FlatList} from 'react-native';

import defaultProps from '../config/defaultProps';
import HelpItem from '../components/HelpItem';
import ListSeparator from '../components/ListSeparator';

function Help() {   
    return (   
        <FlatList
            data={defaultProps.imgUstensile}
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