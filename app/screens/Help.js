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
