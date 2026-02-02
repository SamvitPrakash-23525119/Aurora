import colors from '@/styles/global/colors';
import { fontFamilies } from '@/styles/global/fonts';
import { StyleSheet } from "react-native";

const colorScheme = colors('Lightning');

export const styles = StyleSheet.create({
    CARD_CONTAINER: {
        alignSelf:'flex-start',
        flexDirection: 'row',
        textAlign: 'left',
        marginBottom: '10%'
    },

    TEXT_CONTAINER: {
        paddingLeft: '5%'
    },

    MAIN_TEXT: {
        fontSize: 19,
        color: colorScheme.ACCENT,
        fontFamily: fontFamilies.light,
    },

    SUB_TEXT: {
        fontSize: 14,
        color: colorScheme.ACCENT,
        fontFamily: fontFamilies.regular
    },

    DIVIDER: {
        // backgroundColor: colorScheme.ACCENT,
        // marginTop: '15%',
        // marginLeft: '-8%',
        // width: '150%',
        // height: 0.5,
    }
});


