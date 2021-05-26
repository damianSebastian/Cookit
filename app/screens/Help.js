import React from 'react';
import {FlatList} from 'react-native';

import defaultProps from '../config/defaultProps';
import HelpItem from '../components/HelpItem';
import Screen from '../components/Screen';

function Help() {   
    return (   
        <Screen>
            <FlatList
                data={defaultProps.imgUstensile}
                keyExtractor={(utensil) => utensil.id.toString()}
                renderItem={({item}) =>
                <HelpItem 
                image={item.image}
                description={item.description}/>} 
                
                />

        </Screen>
            
      );
}
export default Help;
