import React from 'react';
import { Alert, FlatList, View} from 'react-native';


import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListSeparator from '../components/ListSeparator';

const messages = [
    {
        id:1,
        title:'T1',
        description:'D1',
        image: require('../assets/cookit_logo.png'),
    },
    {
        id:2,
        title:'T2',
        description:'D2',
        image: require('../assets/cookit_logo.png'),
    },
]

function MessagesScreen() {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString}
                renderItem={({item}) =>
                
                <ListItem
                    name={item.title}
                    nameDetalis={item.description}
                    profileImage={item.image}
                    onPress={() => Alert.alert("Mesaj")}
                    />} 
                ItemSeparatorComponent={ListSeparator}   
                    
                />
                
        </Screen>
    );
} 

export default MessagesScreen;