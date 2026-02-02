import colors from '@/styles/global/colors';
import { StyleSheet } from "react-native";

const colorScheme = colors('Lightning');

export const styles = StyleSheet.create({
    MODAL_CONTAINER: {
        backgroundColor: colorScheme.SECONDARY,
        justifyContent:'center',
        position: 'absolute',
        alignItems: 'center',
        borderRadius: 12,
        padding: '5%',
        width: '80%',
        top: '22%',
    }
});


