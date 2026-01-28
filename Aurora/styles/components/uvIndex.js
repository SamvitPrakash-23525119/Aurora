import colors from '@/styles/global/colors';
import { fontFamilies } from '@/styles/global/fonts';
import { StyleSheet } from 'react-native';

export default function cssAdapter(key){
    const colorScheme = colors(key);
    const styles = StyleSheet.create({
        CARD_CONTAINER: {
            backgroundColor: colorScheme.SECONDARY,
            borderRadius: 12,
            width: '45%',
            margin: 5,
        },

        HEADING_CONTAINER: {
            alignSelf: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            margin: 5,
        },

        HEADING_TEXT: {
            fontFamily: fontFamilies.light,
            color: colorScheme.ACCENT,
            marginLeft: 5,
            fontSize: 20,
        },

        GAUGE_LABEL: {
            fontFamily: fontFamilies.medium,
            color: colorScheme.ACCENT,
            position: 'absolute',
            fontSize: 25,
            left: '47%',
            top: '60%',
        }


    });

    return styles;

}