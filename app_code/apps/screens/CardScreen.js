import React from 'react';
import { FlatList } from 'react-native';

import Card from '../components/Card';

import Screen from '../components/Screen';

const messages = [
    {
        id:1,
        title:"Ou ochi",
        subtitle:"9 ingrediente, 30 de minute",
        image:require('../covers/carbonara.jpg'),
    },
    {
        id:2,
        title:"Paste quatro fromagi",
        subtitle:"descriere 2",
        image:require('../assets/cookit_logo.png'),
    },
    {
        id:3,
        title:"mancare 3",
        subtitle:"descriere 3",
        image:require('../assets/cookit_logo.png')
    },
    {
        id:4,
        title:"Mancare 4",
        subtitle:"Descriere 4",
        image:require('../assets/cookit_logo.png'),
    },
]

function CardScreen({onPress}) {
    return (
        <Screen>
            <FlatList
                
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({item}) =>
                <Card
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                    onPress={onPress}/>} />

        </Screen>
        
    );
}


export default CardScreen;