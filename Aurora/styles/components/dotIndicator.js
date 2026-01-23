import { StyleSheet } from 'react-native';
import colors from '@/styles/global/colors';

export default function cssAdapter(key){
    const colorScheme = colors(key);

    const styles = StyleSheet.create({
        DOT_CONTAINER: {
            justifyContent: "center",
            flexDirection: "row",
            paddingVertical: 12,
            paddingBottom: '5%',
        },

        DOT: {
            backgroundColor: colorScheme.ACCENT,
            borderColor: colorScheme.SECONDARY,
            marginHorizontal: 6,
            borderRadius: 5,
            borderWidth: 1,
            height: 10,
            width: 10,
        },
        
        ACTIVE_DOT: {
            backgroundColor: colorScheme.SECONDARY,
            borderRadius: 5,
            height: 10,
            width: 10,
        },
        
    });

    return styles;
}