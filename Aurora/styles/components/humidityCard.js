import { StyleSheet } from 'react-native'
import colors from '@/styles/global/colors'
import { fontFamilies } from '@/styles/global/fonts';

export default function cssAdapter(key){
    const colorScheme = colors(key);

    const styles = StyleSheet.create({
        CARD_CONTAINER: {
            backgroundColor: colorScheme.SECONDARY,
            alignItems: 'center',
            borderRadius: 12,
            height: '65%',
            width: '45%',
            margin: 5
        },

        HEADING_CONTAINER: {
            alignSelf: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 10,
        },

        HEADING_TEXT: {
            color: colorScheme.ACCENT,
            fontFamily: fontFamilies.light,
            fontSize: 20,
        }

    });

    return styles;

}