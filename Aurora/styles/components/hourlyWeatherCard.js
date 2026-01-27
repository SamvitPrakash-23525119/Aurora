import { StyleSheet } from 'react-native'
import colors from '@/styles/global/colors'
import { fontFamilies } from '../global/fonts';

export default function cssAdapter(key){
    const colorScheme = colors(key);

    const styles = StyleSheet.create({
        CARD_CONTAINER: {
            backgroundColor: colorScheme.SECONDARY,
            borderColor: colorScheme.ACCENT,
            borderRadius: 12,
            maxHeight: 120,
            minHeight: 100,
            minWidth: 375,
            borderWidth: 1,
            padding: 16,
            margin: 5,

        },

        CLOUD_ILLUSTRATION_CONTAINER: {
            position: 'absolute',
            right: '-3%',
            top: '-25%'
        },

        LIGHTNING_ILLUSTRATION_CONTAINER: {
            position: 'absolute',
            right: '-5%',
            top: '-10%'
        },

        RAIN_ILLUSTRATION_CONTAINER: {
            position: 'absolute',
            right: '0%',
            top: '5%'
        },

        SNOW_ILLUSTRATION_CONTAINER: {
            position: 'absolute',
            right: '0%',
            top: '-10%'
        },

        SUN_ILLUSTRATION_CONTAINER: {
            position: 'absolute',
            right: '0%',
            top: '0%'
        },

        WIND_ILLUSTRATION_CONTAINER: {
            position: 'absolute',
            right: '2%',
            top: '0%'
        },

        TEMPERATURE_CONTAINER: {
            position:"absolute",
            top: '50%',
            left: '44%'
        },

        WEATHER_CONTAINER: {
            position: "absolute",
            top: '90%',
            left: '5%'
        },

        TIME_CONTAINER: {
            position:"absolute",
            justifyContent: 'center',
            alignItems: 'center',
            top: '50%',
            left: '5%'
        },

        TEMPERATURE_TEXT:{
            color: colorScheme.ACCENT,
            fontFamily: fontFamilies.regular,
            fontSize: 30
        },
    
        WEATHER_TEXT:{
            color: colorScheme.ACCENT,
            fontFamily: fontFamilies.light,
            fontSize: 20
        },
    
        TIME_TEXT:{
            color: colorScheme.ACCENT,
            fontFamily: fontFamilies.light,
            fontSize: 20
        },

    });

    return styles;
}