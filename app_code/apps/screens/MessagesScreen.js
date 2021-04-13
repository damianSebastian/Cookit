import React, { useState } from 'react';
import { Alert, FlatList, View} from 'react-native';


import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListSeparator from '../components/ListSeparator';
import DeleteElementAction from '../components/DeleteElementAction';

const initialMessages = [
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
     const[messages,setMessages] = useState(initialMessages);
    const[refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    }

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
                    renderLeftAction={() =><DeleteElementAction onPress={()=> handleDelete(item)}/>}
                    />} 
                     ItemSeparatorComponent={ListSeparator}   
                 refreshing={refreshing}
                 onRefresh={() => {
                     setMessages([
                        {
                        id:2,
                        title:'T2',
                        description:'D2',
                        image: require('../assets/cookit_logo.png'),
                        },
                ]);
             }}   
            />
                
        </Screen>
    );
} 

export default MessagesScreen;