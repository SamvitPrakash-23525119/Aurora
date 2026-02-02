import colors from '@/styles/global/colors';
import { fontFamilies } from '@/styles/global/fonts';
import { StyleSheet } from 'react-native';


export default function cssAdapter(key) {
    const colorScheme = colors(key);

    const styles = StyleSheet.create({
        PAGE_CONTAINER: {
            backgroundColor: colorScheme.SECONDARY,
            height: '100%',
            flex: 1,
            paddingHorizontal: 20,
            paddingTop: 50,
        },
        
        HEADING_CONTAINER: {
            right: -50,
            top: '20%',
            position: 'absolute',
            transform: [{ rotate: '90deg' }],
        },

        LIGHTNING_HEADING_CONTAINER: {
            right: -90,
            top: '25%',
            position: 'absolute',
            transform: [{ rotate: '90deg' }],
        },

        RAINY_HEADING_CONTAINER: {
            right: -40,
            top: '20%',
            position: 'absolute',
            transform: [{ rotate: '90deg' }],
        },

        MAIN_TEXT_CONTAINER: {
            position: 'absolute',
            top: '10%',
            left: '5%',
        },

        TEMPERATURE_CONTAINER: {
            position: 'absolute',
            top: '94%',
            right: '65%',
            color: colorScheme.ACCENT,
        },

        TEMPERATURE_TEXT: {
            fontSize: 60,
            color: colorScheme.ACCENT,
            fontFamily: fontFamilies.light,
        },

        TEXT_BIG: {
            fontSize: 25,
            color: colorScheme.ACCENT,
            fontFamily: fontFamilies.regular,
        },

        TEXT_SMALL: {
            fontSize: 15,
            color: colorScheme.ACCENT,
            fontFamily: fontFamilies.light,
        },

        TEXT_HEADING: {
            fontSize: 60,
            color: colorScheme.ACCENT,
            fontFamily: fontFamilies.medium,
        },

        SUN_ILLUSTRATION: {
            position: 'absolute',
            top: '41%',
            right: '9%'
        },

        CLOUD_ILLUSTRATION: {
            position: 'absolute',
            top: '37%',
            right: '8%'
        },

        RAIN_ILLUSTRATION: {
            position: 'absolute',
            top: '38%',                
            right: '8%'
        },

        SNOW_ILLUSTRATION: {
            position: 'absolute',
            top: '38%',
            right: '8%'
        },

        WIND_ILLUSTRATION: {
            position: 'absolute',
            top: '41%',
            right: '8%',
        },

        LIGHTNING_ILLUSTRATION: {
            position: 'absolute',
            top: '15%',
            right: '0%'
        },

    });

    return styles;
}
