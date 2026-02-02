import colors from "@/styles/global/colors";
import { StyleSheet } from "react-native";

export default function cssAdapter(key){
    const colorScheme = colors(key);
    const styles = StyleSheet.create({
        BUTTON: {
            backgroundColor: colorScheme.ACCENT,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            borderRadius: 44,
            bottom: '2%',
            right: '7%',
            height: 55,
            width: 55,
        },

    });

    return styles;
}