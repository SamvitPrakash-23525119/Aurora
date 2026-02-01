import colors from '@/styles/global/colors';
import { fontFamilies } from '@/styles/global/fonts';
import { StyleSheet } from 'react-native';

export default function cssAdapter(key){
    const colorScheme = colors(key);

    const styles = StyleSheet.create({
        PAGE_CONTAINER: {
            backgroundColor: colorScheme.ACCENT,
            flex: 1
        },

        PAGE_CONTENT_CONTAINER: {
            flexDirection: 'column',
            alignItems: 'center',
        },

        CONTENT_CONTAINER: {
            flex: 1
            
        },

        TEXT_HEADING: {
            fontFamily: fontFamilies.regular,
            color: colorScheme.SECONDARY,
            marginTop: '15%',
            marginBottom: 12,
            fontSize: 24,
            textAlign: 'center'
        }

    });

    return styles;
}