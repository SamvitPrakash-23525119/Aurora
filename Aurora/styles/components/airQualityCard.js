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
            margin: 5,
        },

        HEADING_TEXT: {
            fontFamily: fontFamilies.light,
            color: colorScheme.ACCENT,
            paddingLeft: 10,
            fontSize: 20,
        }

    });

    return styles;

}