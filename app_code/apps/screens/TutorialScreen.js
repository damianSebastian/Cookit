import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from '../components/AppText';
import defaultProps from '../config/defaultProps';
import Screen from '../components/Screen';
import AppIconButtons from '../components/AppIconButtons';
import MyButton from '../components/MyButton';
import { ScrollView } from 'react-native-gesture-handler';

function TutorialScreen({text, nextOnPress, previosuOnPress}) {

    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.statusBar}>
                    <View style={styles.timer}/>
                    <Image 
                        source={require('../assets/waiting_egg.png')}
                        resizeMode='contain'
                        style={styles.cookStatus}
                        />
                </View>
                <View style={styles.info} >
                    <ScrollView contentContainerStyle={{alignItems:'center'}}>
                        <AppText style={defaultProps.mainText}
                        text={text}/> 
                        
                    </ScrollView>

                </View>
                
                <Image source={require('../assets/oala_pe_foc.png')}
                resizeMode='contain'
                style={styles.image}/>

                <View style={styles.buttons}>
                    <AppIconButtons iconName="arrow-left"
                        size={60}
                        onPress={previosuOnPress}/>
                    <MyButton 
                    title="Start"
                    
                    /> 
                    <AppIconButtons iconName="arrow-right"
                        size={60}
                        onPress={nextOnPress}/>
 
                </View>         
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: defaultProps.colors.firstBackground,
        flexDirection: 'column', 
        alignItems:'center',
        flex:1,          
    },
    text:{
        margin: 10,
    },

    image:{
        width: 200,
        height:200,      
         margin:5,
    },
    statusBar:{
        alignItems: 'center',      
        top: 10,         
        width:"100%",                  
    },
    timer:{    
        backgroundColor:defaultProps.colors.secondBackground,
         width:"90%",
         height: 10, 
    },
    cookStatus: {
        height: 60,
         width: 80,
         margin: 5,
     },
    buttons :{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end', 
        bottom: 10, 
        position: 'absolute', 
        width: "100%",
        paddingHorizontal: 5,
    },
    info:{
        width: "80%",
        height: 200,       
        marginVertical: 10,
    },
})

export default TutorialScreen;