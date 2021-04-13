import React from 'react';
import { FlatList } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';
import datas from '../config/data';


function CardScreen({navigation}) {
    return (
        <Screen>
            <FlatList
                
                data={datas}
                keyExtractor={(cook) => cook.id.toString()}
                renderItem={({item}) =>
                <Card
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                    onPress={() => navigation.navigate(item.targetDescriptionScreen,item)}/>} />

        </Screen>
        
    );
}


export default CardScreen;