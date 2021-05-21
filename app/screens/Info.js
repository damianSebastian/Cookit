import React from 'react';
import {FlatList} from 'react-native';


import Screen from '../components/Screen';
import info from '../config/info';
import Post from '../components/Post';

function Info() {

    return(
        <Screen>

            <FlatList 
                data={info}
                keyExtractor={(post) => post.id.toString()}
                renderItem={({item}) =>
                <Post 
                    title={item.title}
                    image={item.image}
                    content={item.content}/>
         
            }            
            />
                       
        </Screen>
    )

}

export default Info;