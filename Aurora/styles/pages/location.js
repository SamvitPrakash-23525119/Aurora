import { GENERAL_ACCENT, GENERAL_SECONDARY } from "@/styles/global/colors";
import { fontFamilies } from "@/styles/global/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    PAGE_CONTAINER:{
        backgroundColor: GENERAL_SECONDARY,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '25%',
        flex: 1,
    },

    CARD_CONTAINER: {
        height: '80%',
        width: '85%',
    },

    HEADING_TEXT: {
        fontFamily: fontFamilies.regular,
        color: GENERAL_ACCENT,
        marginBottom: '10%',
        fontSize: 30,

    }

});
