import colors from "@/styles/global/colors";
import { StyleSheet } from "react-native";

const colorScheme = colors('Lightning');
export const INPUT = colorScheme.ACCENT;

export default function cssAdapter(){

    const styles = StyleSheet.create({

        CONTAINER: {
            backgroundColor: colorScheme.SECONDARY,
            color: colorScheme.ACCENT,
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: 15,
            borderRadius: 33,
            paddingLeft: 15,
            padding: 4,
            margin: 16,
        },

        INPUT_CONTAINER: {
            color: colorScheme.ACCENT,
            marginRight: 8,
            flex: 1,
        },

        INPUT: {
            color: colorScheme.ACCENT,
            marginRight: 8,
            flex: 1,
        }

    });

    return styles;

}


