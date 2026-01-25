import { StyleSheet } from 'react-native';
import colors from '../global/colors';

export default function cssAdapter(key, top){
    const colorScheme = colors(key);

    return StyleSheet.create({
        TOUCHABLE_OPACITY: {
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            borderRadius: 22,
            height: 44,
            width: 44,
        },

        SIDE_BUTTON_CONTAINER: {
            position: 'absolute',
            top: top,
        },

        SIDE_BUTTON_CONTAINER_LEFT:{
            borderBottomRightRadius: 22,
            borderTopRightRadius: 22,
            zIndex: 1000,
            left: '-2%',
        },

        SIDE_BUTTON_CONTAINER_RIGHT:{
            borderBottomLeftRadius: 22,
            borderTopLeftRadius: 22,
            right: '-2%',
            zIndex: 1000,
        },

        COLOR: {
            backgroundColor: colorScheme.ACCENT,
        },

        COLOR_INVERT: {
            backgroundColor: colorScheme.SECONDARY,
        },

    });
}
