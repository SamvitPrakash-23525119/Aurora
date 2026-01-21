import { StyleSheet } from 'react-native';
import colors from '../global/colors';

export default function cssAdapter(key){
    const colorScheme = colors(key);

    return StyleSheet.create({
        TOUCHABLE_OPACITY: {
            width: 44,
            height: 44,
            borderRadius: 22,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            backgroundColor: colorScheme.ACCENT,
        },
        
        SIDE_BUTTON_CONTAINER: {
            position: 'absolute',
            top: '60%',
            right: '-2%',
            zIndex: 1000,
            backgroundColor: colorScheme.ACCENT,
            borderTopLeftRadius: 22,
            borderBottomLeftRadius: 22,

        },

        INVERTED_TOUCHABLE_OPACITY: {
            width: 44,
            height: 44,
            borderRadius: 22,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            backgroundColor: colorScheme.ACCENT,
        },
        
        INVERTED_SIDE_BUTTON_CONTAINER: {
            position: 'absolute',
            top: '60%',
            left: '-2%',
            zIndex: 1000,
            backgroundColor: colorScheme.ACCENT,
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,

        },
    });
}
