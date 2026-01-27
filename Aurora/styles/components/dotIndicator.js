import { StyleSheet } from 'react-native';
import colors from '@/styles/global/colors';

export default function cssAdapter(key){
    const colorScheme = colors(key);

    const styles = StyleSheet.create({
        
        DOT_CONTAINER: {
            backgroundColor: colorScheme.ACCENT,
            justifyContent: "center",
            paddingHorizontal: 10,
            position: "absolute",
            alignItems: "center",
            flexDirection: "row",
            paddingVertical: 10,
            alignSelf: 'center', // Center the container
            borderRadius: 30, // Make it circular
            marginBottom: 20,
            zIndex: 9999,
            top: '94%',
        },
        
        _DOT_CONTAINER: {
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