import { StyleSheet } from 'react-native'
import colors from '@/styles/global/colors'
import { fontFamilies } from '@/styles/global/fonts'

export default function cssAdapter(key){
    const colorScheme = colors(key);
    const styles = StyleSheet.create({
        CARD_CONTAINER: {
            backgroundColor: colorScheme.ACCENT,
            borderWidth: 2,
            borderColor: colorScheme.SECONDARY,
            alignItems: 'center',
            borderRadius: 12,
            height: 75,
            width: '45%',
            margin: 5
        },

        HEADING_CONTAINER: {
            alignSelf: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 0,
            margin: 5,
        },

        CONTENT_CONTAINER: {
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
        },

        HEADING_TEXT: {
            fontFamily: fontFamilies.light,
            color: colorScheme.SECONDARY,
            marginLeft: 5,
            fontSize: 20,
        },

        TIME_TEXT: {
            fontFamily: fontFamilies.medium,
            color: colorScheme.SECONDARY,
            fontSize: 20,
            margin: 5
        },

    });

    return styles;
}