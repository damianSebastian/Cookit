import React from 'react';
import { 
    Image,
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView
} from 'react-native';

import colors from '../config/colors';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function StatusScreen({title, subtitle, image,inputColor="button"}) {
    return( 
        <ScrollView style={style.background}>
            
            
            <Image           
                resizeMode ="contain"
                style={style.backgroundImage}
                source={require('../assets/cookit_logo.png')}
                />
            <MaterialCommunityIcons name="close" size={30} color={inputColor} style={style.leftComp}/> 
            <MaterialCommunityIcons name="trash-can-outline" size={30} color={inputColor} style={style.rightComp}/>
        
            

        </ScrollView>
    
    )
};

export default StatusScreen;
    
const style = StyleSheet.create({
    background: {
      flex : 1,
      flexDirection : 'column-reverse',
      backgroundColor: colors.cardBackground,
      alignItems : 'center',
      
    },
    rightComp :{       
        top:40,
        right: 30,      
        position: "absolute",
    },
    leftComp :{      
        top:40,
        left: 30,      
        position: "absolute",
    },
    backgroundImage :{
        height : "100%",
        width : "100%",
        flex: 0.3,
    
    }
  })