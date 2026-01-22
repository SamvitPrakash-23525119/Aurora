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
        },

        SIDE_BUTTON_CONTAINER: {
            position: 'absolute',
            top: top,
        },

        SIDE_BUTTON_CONTAINER_LEFT:{
            left: '-2%',
            zIndex: 1000,
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,
        },

        SIDE_BUTTON_CONTAINER_RIGHT:{
            right: '-2%',
            zIndex: 1000,
            borderTopLeftRadius: 22,
            borderBottomLeftRadius: 22,
        },

        COLOR: {
            backgroundColor: colorScheme.ACCENT,
        },

        COLOR_INVERT: {
            backgroundColor: colorScheme.SECONDARY,
        },

    });
}
