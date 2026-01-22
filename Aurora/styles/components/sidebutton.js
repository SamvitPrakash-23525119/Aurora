import { StyleSheet } from 'react-native';
import colors from '../global/colors';

export default function cssAdapter(key, top){
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
            top: top,
            left: '-2%',
            zIndex: 1000,
            backgroundColor: colorScheme.ACCENT,
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,

        }
    });
}
