import React from 'react';
import { TouchableOpacity} from 'react-native';

import AppText from './AppText';
import defaultProps from '../config/defaultProps';

function PickerItem({label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={[defaultProps.titletext, {alignSelf: 'center'}]} text={label}/>
        </TouchableOpacity>
    );
}


export default PickerItem;