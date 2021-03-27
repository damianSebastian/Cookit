import React, {useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function MyTextInput({iconName, placeholder, keyboard="email-address"}) {
    const[firstName, setFirstName] = useState('');
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={iconName} size={30} color={colors.purple} style={styles.icon}/>
            <TextInput placeholder={placeholder}
            keyboardType={keyboard}
            onChangeText={(text) => setFirstName(text)}
            style={styles.text}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.cardBackground,
        height: 60,
        width:"100%",
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        

    },
    icon: {
        margin:10,
    },
    text:{
        fontSize:18,
        color:colors.text,
    }
})

export default MyTextInput;