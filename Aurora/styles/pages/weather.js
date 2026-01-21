import { StyleSheet } from 'react-native'
import colors from '@/styles/global/colors'


export default function cssAdapter(key){
    const colorScheme = colors(key);

    const styles = StyleSheet.create({
        PAGE_CONTAINER: {
           height: '100%',
           backgroundColor: colorScheme.ACCENT
        },

    });

    return styles;
};