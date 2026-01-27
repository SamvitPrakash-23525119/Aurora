import { StyleSheet } from 'react-native'
import { fontFamilies } from '@/styles/global/fonts'
import colors from '@/styles/global/colors'

export default function cssAdapter(key) {
    const colorScheme = colors(key);

    const styles = StyleSheet.create({
        COMPONENT_CONTAINER: {
            flexDirection: "row",
            alignItems: "center",
        },

        BAR_CONTAINER: {
            backgroundColor: colorScheme.ACCENT,
            borderColor: colorScheme.ACCENT,
            justifyContent: "flex-end",
            overflow: "hidden",
            borderRadius: 6,
            borderWidth: 1,
            width: 12,
        },

        BAR_FILL: {
            backgroundColor: colorScheme.SECONDARY,
            borderRadius: 6,
            width: "100%",
        },

        BAR_LABEL: {
            fontFamily: fontFamilies.regular,
            color: colorScheme.ACCENT,
            margin: '15%',
            fontSize: 30,
        },
    });

    return styles;


}