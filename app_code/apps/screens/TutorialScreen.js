import React from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';

import AppText from '../components/AppText';
import defaultProps from '../config/defaultProps';
import Screen from '../components/Screen';
import AppIconButtons from '../components/AppIconButtons';
import MyButton from '../components/MyButton';

function TutorialScreen({text}) {
    return (
        <Screen>
            <View style={styles.container}>
                <AppText style={defaultProps.titletext} text={text}/>
                <Image source={require('../assets/cookit_logo.png')}
                resizeMode='contain'
                style={styles.image}/>
                <View style={styles.timer}/>

                <View style={{flexDirection:'row'  ,justifyContent:'space-around',
                 alignItems:'center', bottom: 30, position: 'absolute', width: "100%"
                 }}>
                    <Image 
                        source={require('../assets/waiting_egg.png')}
                        resizeMode='contain'
                        style={styles.cookStatus}
                    />
                    <MyButton size={120} 
                    title="Start" 

                    /> 
                    <View style={styles.nextStageButton}>
                        <AppIconButtons iconName="arrow-right"
                        size={60}
                        />
                        <AppText style={defaultProps.descriptionText} text="Next stage"/>
                    </View>

                </View>         
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
            backgroundColor: defaultProps.colors.firstBackground,
            justifyContent: 'center',
            alignItems:'center',
            flex:1,
            
    },
    image:{
        width: 200,
        height:200,
         top: 50,
         margin:10,
    },
    timer:{
        top: 20,
        position:'absolute',               
        alignItems:'center',
        backgroundColor:defaultProps.colors.secondBackground,
         width:"90%",
         height: 10, 
    },

    nextStageButton: {
        justifyContent:'center',
         alignItems:'center',

    },
    cookStatus: {
        height: 80,
         width: 80,

    }
})

export default TutorialScreen;