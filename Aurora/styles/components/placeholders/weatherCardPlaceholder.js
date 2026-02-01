import colors from '@/styles/global/colors';
import { StyleSheet } from 'react-native';

export default function cssAdapter( key ){
    const colorScheme = colors(key)

    const styles = StyleSheet.create({
        CARD_CONTAINER: {
            backgroundColor: colorScheme.ACCENT,
            borderRadius: 12,
            maxHeight: 120,
            minHeight: 100,
            minWidth: 365,
            padding: 16,
            margin: 5,

        },

    });

    return styles;
}