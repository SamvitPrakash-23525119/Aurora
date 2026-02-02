import { GENERAL_ACCENT, GENERAL_SECONDARY } from '@/styles/global/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    PAGE_CONTAINER: {
        backgroundColor: GENERAL_SECONDARY,
        borderColor: GENERAL_ACCENT,
        justifyContent: 'center',
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 33,
        paddingTop: 50,
        borderWidth: 1,
        height: '100%',
        flex: 1,
    }
});

