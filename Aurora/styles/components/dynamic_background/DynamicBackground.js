import { StyleSheet } from 'react-native'
import colors from '@/styles/global/colors'
import { Lightning } from '@/components/illustrations/Lightning';


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
            right: -80,
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
            top: '15%',
            right: '75%',
        },

        TEMPERATURE_CONTAINER: {
            position: 'absolute',
            top: '93%',
            right: '65%',
            color: colorScheme.ACCENT,
        },

        TEMPERATURE_TEXT: {
            fontSize: 60,
            color: colorScheme.ACCENT,
        },

        TEXT_BIG: {
            fontSize: 25,
            fontWeight: 'bold',
            color: colorScheme.ACCENT,
        },

        TEXT_SMALL: {
            fontSize: 15,
            color: colorScheme.ACCENT,
        },

        TEXT_HEADING: {
            fontSize: 60,
            color: colorScheme.ACCENT,
        },

        SUN_ILLUSTRATION: {
            position: 'absolute',
            top: 300,
            right: 30,
        },

        CLOUD_ILLUSTRATION: {
            position: 'absolute',
            top: 300,
            right: 30,
        },

        RAIN_ILLUSTRATION: {
            position: 'absolute',
            top: 300,
            right: 30,
        },

        SNOW_ILLUSTRATION: {
            position: 'absolute',
            top: 300,
            right: 30,
        },

        WIND_ILLUSTRATION: {
            position: 'absolute',
            top: 300,
            right: 30,
        },

        LIGHTNING_ILLUSTRATION: {
            position: 'absolute',
            top: 350,
            right: 10,
        },

    });

    return styles;
}
