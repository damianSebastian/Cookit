import React from 'react';
import{StyleSheet, FlatList,Alert } from 'react-native';

import MenuItem from '../components/MenuItem';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import ListSeparator from '../components/ListSeparator';


const messages = [
    {
        id:1,
        text:'My Listings',    
        iconName: "format-list-bulleted",
        iconColor:colors.purple,
    },
    {
        id:2,
        text:'My Messages',
        iconName: "email",
        iconColor: colors.purple,
    },
]

function MenuScreen(props) {
    return (
        <Screen>
            <ListItem
            name="Mocanu Andrei"
            nameDetalis="Colegul de camera"
            profileImage={require('../assets/cookit_logo.png')}
            
            onPress={() =>Alert.alert("msg")}
            /> 
            <FlatList
                style={{marginBottom:20, marginTop:20}}
                data={messages}
                keyExtractor={(message) => message.id.toString}
                renderItem={({item}) =>
                <MenuItem
                       text={item.text}
                       iconName={item.iconName}
                       iconColor={item.iconColor}
                       onPress={() => Alert.alert("My Listings")}
               />}
              
            />           

            <MenuItem 
                iconName="logout"
                iconColor={colors.purple}
                text="Log Out"
                onPress={() => Alert.alert("Log Out")}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    profileView: {
        marginTop: 45,
        marginBottom: 15,
        width:"100%",
        height:50,
    },
    list:{
        marginBottom:15,
        marginTop:15,
    }
})
export default MenuScreen;