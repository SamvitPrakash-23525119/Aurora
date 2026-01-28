import { StyleSheet } from 'react-native';
import colors from '@/styles/global/colors';
import { fontFamilies } from '@/styles/global/fonts';

export default function cssAdapter(key){
    const colorScheme = colors(key);

    const styles = StyleSheet.create({
        PAGE_CONTENT_CONTAINER: {
            flexDirection: 'column',
            alignItems: 'center',
        },

        ROW_CONTAINER: {
            flex: 1,
            flexDirection: 'row',
            height: '100%',
        },

        TEXT_HEADING: {
            fontFamily: fontFamilies.regular,
            color: colorScheme.SECONDARY,
            marginBottom: 12,
            marginTop: '15%',
            fontSize: 24,
        }
    });

    return styles;
}