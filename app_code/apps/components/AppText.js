import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import colors from '../config/colors';

function AppText({text}) {
return <Text style ={style.text}>{text}</Text>;
}



const style=StyleSheet.create({
    text: {
        color: 'black',
        ...Platform.select({

            ios: {
                fontSize: 30,
                fontFamily: "Avenir",
            },
            android : {
                fontSize:20,
                fontFamily: "Roboto",
            }
        })
    }
})

export default AppText;