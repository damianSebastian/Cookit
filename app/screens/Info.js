import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import AppText from '../components/AppText';

import defaultProps from '../config/defaultProps';

function Info() {
    return(
        <ScrollView style={styles.container}>
            <AppText text="Tips & Tricks" style={[defaultProps.titletext,{margin:10, fontSize: 35}]}/>

        </ScrollView>
    )

}

export default Info;

const styles=StyleSheet.create({
    container : {
    backgroundColor:defaultProps.colors.firstBackground},
})