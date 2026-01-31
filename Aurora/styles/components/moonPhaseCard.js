import colors from '@/styles/global/colors';
import { fontFamilies } from '@/styles/global/fonts';
import { StyleSheet } from 'react-native';

export default function cssAdapter(key){
    const colorScheme = colors(key);

    const styles = StyleSheet.create({
        CARD_CONTAINER: {
            backgroundColor: colorScheme.SECONDARY,
            alignItems: 'center',
            borderRadius: 12,
            width: '45%',
            height: 175,
            margin: 5
        },

        HEADING_CONTAINER: {
            alignSelf: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: '10%',
            margin: 6,
            marginLeft: 7
        },

        HEADING_TEXT: {
            fontFamily: fontFamilies.light,
            color: colorScheme.ACCENT,
            fontSize: 20,
            marginLeft: 5
        },

        CONTENT_CONTAINER: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },

        PHASE_TEXT: {
            fontFamily: fontFamilies.regular,
            color: colorScheme.ACCENT,
            fontSize: 18,
            margin: 0
        },

        ILLUMINATION_TEXT: {
            fontFamily: fontFamilies.light,
            color: colorScheme.ACCENT,
            fontSize: 15,
            margin: 0
        }

    });

    return styles;

}