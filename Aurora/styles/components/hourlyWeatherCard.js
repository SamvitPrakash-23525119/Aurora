import colors from '@/styles/global/colors';
import { StyleSheet } from 'react-native';
import { fontFamilies } from '../global/fonts';

export default function cssAdapter(selected, key, current){
    const colorScheme = colors(selected);

    const styles = StyleSheet.create({
        CARD_CONTAINER: {
            backgroundColor: current ? colorScheme.SECONDARY : key.SECONDARY,
            borderColor: colorScheme.ACCENT,
            borderRadius: 12,
            maxHeight: 120,
            minHeight: 100,
            minWidth: 375,
            borderWidth: current? 1 : 0,
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
            color: current ? colorScheme.ACCENT : key.ACCENT,
            fontFamily: fontFamilies.regular,
            fontSize: 30
        },
    
        WEATHER_TEXT:{
            color: current ? colorScheme.ACCENT : key.ACCENT,
            fontFamily: fontFamilies.light,
            fontSize: 20
        },
    
        TIME_TEXT:{
            color: current ? colorScheme.ACCENT : key.ACCENT,
            fontFamily: fontFamilies.light,
            fontSize: 20
        },

    });

    return styles;
}