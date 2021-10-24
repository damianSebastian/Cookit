import React from 'react';
import { View } from 'react-native';
import MyButton from '../components/MyButton';
import Screen from '../components/Screen';

function LanguageScreen() {
    return(
        <Screen>
            <View>
                <MyButton size={150} title="English" onPress={()=> console.log("engleza")}/>
                <MyButton size={150} title="Română" onPress={()=> console.log("romana")}/>
            </View>
        </Screen>

    )
}
export default LanguageScreen;