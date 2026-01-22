import { View, TextInput, PanResponder } from 'react-native'
import { useRef } from 'react';
import { router, useLocalSearchParams } from 'expo-router';

import  cssAdapter from '@/styles/pages/weather';
import SideButton from '@/components/side_button/SideButton';
import HourlyWeatherCard from '@/components/hourly_weather_card/HourlyWeatherCard';

export default function Weather() {
    const { weather } = useLocalSearchParams();
    const styles = cssAdapter(weather);
    const weatherStr = Array.isArray(weather) ? weather[0] : (weather ?? '');

    const onPanResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gesture) => {
                return Math.abs(gesture.dy) > 15;
            },

            onPanResponderRelease: (_, gesture) => {
                if (gesture.dy > 50) {
                    router.push("/");
                }
            },
        })
    ).current;

    return (
        <View style={styles.PAGE_CONTAINER} {...onPanResponder.panHandlers}>
            <SideButton weatherVariable={weatherStr} page={""} icon={"arrow-right"} top={"5%"} invert={true} right={true}/>
            <View style={{paddingTop: 100}}>
                <HourlyWeatherCard weatherVariable={"Sunny"} temperature={"27°C"} time={"14:00"} />
                <HourlyWeatherCard weatherVariable={"Windy"} temperature={"25°C"} time={"15:00"} />
                <HourlyWeatherCard weatherVariable={"Cloudy"} temperature={"20°C"} time={"16:00"} />
                <HourlyWeatherCard weatherVariable={"Rainy"} temperature={"19°C"} time={"17:00"} />
                <HourlyWeatherCard weatherVariable={"Lightning"} temperature={"23°C"} time={"18:00"} />
                <HourlyWeatherCard weatherVariable={"Snowy"} temperature={"0°C"} time={"19:00"} />
            </View>

        </View>
    );
}
