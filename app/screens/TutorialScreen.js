import React,{ useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Timer} from 'react-native-stopwatch-timer';

import AppText from '../components/AppText';
import defaultProps from '../config/defaultProps';
import AppIconButtons from '../components/AppIconButtons';
import MyButton from '../components/MyButton';

function TutorialScreen({route, navigation}) {
    const item = route.params;
    const [allValues, setAllValues] = useState({
        step: 0,
        button: 'Start',
        isTimerStart: false,
        resetTimer: false,
    });

        
    const handleOnPressStart =() => {
        
        if(allValues.button === 'Finish') {
            if(allValues.step === item.steps.length - 1 ) { 
                
                navigation.navigate("Finish");

            } else {
                 setAllValues({ step : allValues.step + 1,button :'Start', isTimerStart : false, resetTimer: true })
                 
            }
        } else {
            setAllValues({...allValues,button : 'Finish', isTimerStart: !allValues.isTimerStart, resetTimer : false})
            
        }
    }

    const handlePreviousOnPress = allValues.step === 0 ? null : () => 
    setAllValues({...allValues, step : allValues.step - 1 ,isTimerStart: false, resetTimer : true});
    

        return (
            

                <View style={styles.container}>

                    <View style={styles.statusBar}>

                        <View >
                            
                            <Timer
                            totalDuration={item.steps[allValues.step].time}
                            start={allValues.isTimerStart}                           
                            reset={allValues.resetTimer}                           
                            options={options}                   
                            handleFinish={handleOnPressStart}                      
                            />                  

                        </View>

                            <Image 
                            source={item.steps[allValues.step].statusImage}
                            resizeMode='contain'
                            style={styles.cookStatus}
                            />                      
                    </View>

                    <View style={styles.info} >

                            <ScrollView showsVerticalScrollIndicator={false} 
                            fadingEdgeLength={30}
                            
                            contentContainerStyle={{alignItems:'center'}}>

                            <AppText style={defaultProps.mainText}
                            text={item.steps[allValues.step].text}/> 
                            
                            </ScrollView>
                    </View>
                        
                    <Image source={item.steps[allValues.step].image}
                        resizeMode='contain'
                        style={styles.image}/>

                    <View style={styles.buttons}>

                            <AppIconButtons iconName="arrow-left"
                            size={60}
                            onPress={handlePreviousOnPress}/> 

                            <MyButton 
                            title={allValues.button}                            
                            onPress={handleOnPressStart}/>                       
                        
                    </View>  

                </View>

        
        );
  
}

const options = {
    container: {
      backgroundColor: defaultProps.colors.button,
      padding: 5,
      borderRadius: 30,
      width: 200,
      alignItems: 'center',
    },
    text: {
      fontSize: 30,
      color: defaultProps.colors.firstBackground,
    }
  };

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
        width: 250,
        height:250,      
         marginTop: 10,
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
        height: 150,       
        marginVertical: 40,
    },
})

export default TutorialScreen;
