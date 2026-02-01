import colors from "@/styles/global/colors";
import { StyleSheet } from "react-native";

export default function cssAdapter(key){
    const colorScheme = colors(key);
    const styles = StyleSheet.create({
        BUTTON: {
            backgroundColor: colorScheme.ACCENT,
            position: 'absolute',
            bottom: '4%',
            right: '10%',
            borderRadius: 44,
            width: 55,
            height: 55,
            justifyContent: 'center',
            alignItems: 'center',
        },

    });

    return styles;
}