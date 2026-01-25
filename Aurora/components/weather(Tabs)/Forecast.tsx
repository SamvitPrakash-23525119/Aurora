import { Text, ScrollView } from 'react-native';
import cssAdapter from '@/styles/components/weather(Tabs)/forecast';
import HourlyWeatherCard from '../hourly_weather_card/HourlyWeatherCard';

export default function Forecast({ weatherStr } : { weatherStr: string }) {
    const styles = cssAdapter(weatherStr);

    return (
        <ScrollView 
            style={styles.PAGE_CONTAINER} 
            contentContainerStyle={styles.PAGE_CONTENT_CONTAINER} 
            showsHorizontalScrollIndicator={true}
        >
            <Text style={styles.TEXT_HEADING} >The Day Ahead</Text>

            <HourlyWeatherCard weatherVariable={'Cloudy'} time={'1:00'} temperature={'10°C'} />
            <HourlyWeatherCard weatherVariable={'Lightning'} time={'2:00'} temperature={'10°C'} />
            <HourlyWeatherCard weatherVariable={'Rainy'} time={'3:00'} temperature={'10°C'} />
            <HourlyWeatherCard weatherVariable={'Snowy'} time={'4:00'} temperature={'10°C'} />
            <HourlyWeatherCard weatherVariable={'Sunny'} time={'5:00'} temperature={'10°C'} />
            <HourlyWeatherCard weatherVariable={'Windy'} time={'6:00'} temperature={'10°C'} />
            <HourlyWeatherCard weatherVariable={'Cloudy'} time={'7:00'} temperature={'10°C'} />
            <HourlyWeatherCard weatherVariable={'Rainy'} time={'8:00'} temperature={'10°C'} />
            <HourlyWeatherCard weatherVariable={'Windy'} time={'9:00'} temperature={'10°C'} />

        </ScrollView>
    );
}
