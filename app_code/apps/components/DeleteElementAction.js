import React from 'react';
import { View, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


function DeleteElementAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="trash-can"
                    size={50}
                    color={colors.gray}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.button,
        width: 70,
        justifyContent: 'center',
        alignContent: 'center',
    }
})

export default DeleteElementAction;