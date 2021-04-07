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
                <View style={styles.timer}>
                    <View  
                    style={styles.timeStatus}/>
                    <MyButton width={60} 
                    title="Start" 
                    style={defaultProps.descriptionText}
                    />
                </View>

                <View style={styles.nextStageButton}>
                    <AppIconButtons iconName="arrow-right"
                    size={50}
                    />
                    <AppText style={defaultProps.descriptionText} text="Next stage"/>
                </View>
                <Image 
                    source={require('../assets/waiting_egg.png')}
                    resizeMode='contain'
                    style={styles.cookStatus}
                />

                
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
        left: 5,
        position:'absolute',               
        alignItems:'center',
        height:"70%"
    },
    timeStatus:{     
         backgroundColor:defaultProps.colors.secondBackground,
         height:"100%",
         width: 10, 
    },
    nextStageButton: {
        justifyContent:'center',
         alignItems:'center',
         right: 30,
          bottom: 30,
           position: 'absolute'
    },
    cookStatus: {
        height: 70,
         width: 70,
          right:20, 
          top: 20,
           position:'absolute'
    }
})

export default TutorialScreen;