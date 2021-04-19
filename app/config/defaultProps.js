import {Platform} from 'react-native';

import colors from './colors';

export default {
    colors,
    mainText: {
        color: colors.text,
        ...Platform.select({
            ios: {
                fontSize: 24,
                fontFamily: "Avenir",
            },
            android : {
                fontSize:22,
                fontFamily: "Roboto",
            }
        }),
        
        
    },
    descriptionText : {
        color : colors.gray,
        ...Platform.select({
            ios: {
                fontSize: 16,
                fontFamily: "Avenir",
            },
            android : {
                fontSize:14,
                fontFamily: "Roboto",
            }
        }),
        
    },
    titletext :{
        color : colors.text,      
        ...Platform.select({
            ios: {
                fontSize: 30,
                fontFamily: "Avenir",
                
            },
            android : {
                fontSize:28,
                fontFamily: "Roboto",
            }
        }),
        marginVertical: 5,
        fontWeight : 'bold',
    }
}