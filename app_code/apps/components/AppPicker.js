import React, {useState} from 'react';
import { View,
     StyleSheet,
     TouchableWithoutFeedback,
      Modal,
       FlatList} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultProps from '../config/defaultProps';
import AppText from './AppText';
import Screen from './Screen';
import MyButton from './MyButton';
import PickerItem from './PickerItem';

function AppPicker({selectedItem, onSelectItem, items, placeholder, iconName}) {
    const [modelVisible, setModalVisible]=useState(false);
    return (
        <React.Fragment>
            <TouchableWithoutFeedback 
            onPress={() =>setModalVisible(true)}>
                <View style={styles.container}>
                    <MaterialCommunityIcons name={iconName} size={30} color={defaultProps.colors.purple} style={styles.icon}/>
                    <AppText style={styles.text} text={selectedItem ? selectedItem.label : placeholder}/>
                    <MaterialCommunityIcons name="chevron-down" size={30} color={defaultProps.colors.purple} />
    
                </View>
    
            </TouchableWithoutFeedback>
            <Modal visible={modelVisible} animationType="slide">
                <Screen>
                    <MyButton title="Close" onPress={() => setModalVisible(false)}/>
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({item}) =>
                         <PickerItem 
                            label={item.label}
                            onPress={() =>{
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />}
                    />
                </Screen>
            </Modal>

        </React.Fragment>
    );
}

export default AppPicker;

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultProps.colors.cardBackground,
        height: 60,
        width:"100%",
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,       

    },
    icon: {
        margin:10,
    },
    text:{
        flex:1,
        color: defaultProps.colors.text,
    }
})
