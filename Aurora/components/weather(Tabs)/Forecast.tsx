import cssAdapter from '@/styles/components/weather(Tabs)/forecast';
import colors from '@/styles/global/colors';
import { ScrollView, Text } from 'react-native';
import HourlyWeatherCard from '../hourly_weather_card/HourlyWeatherCard';

export default function Forecast({ weatherStr } : { weatherStr: string }) {
    const styles = cssAdapter(weatherStr);
    const colorScheme = colors(weatherStr);

    return (
        <ScrollView 
            style={styles.PAGE_CONTAINER} 
            contentContainerStyle={styles.PAGE_CONTENT_CONTAINER} 
            showsHorizontalScrollIndicator={true}
        >
            <Text style={styles.TEXT_HEADING} >The Day Ahead</Text>

            <HourlyWeatherCard weatherVariable={'Sunny'} time={'1:00'} temperature={'18°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Windy'} time={'2:00'} temperature={'12°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Cloudy'} time={'3:00'} temperature={'22°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Rainy'} time={'4:00'} temperature={'8°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Lightning'} time={'5:00'} temperature={'15°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Snowy'} time={'6:00'} temperature={'-2°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Sunny'} time={'7:00'} temperature={'25°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Cloudy'} time={'8:00'} temperature={'14°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Rainy'} time={'9:00'} temperature={'9°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Windy'} time={'10:00'} temperature={'19°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Lightning'} time={'11:00'} temperature={'11°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Snowy'} time={'12:00'} temperature={'-5°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Sunny'} time={'13:00'} temperature={'28°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Cloudy'} time={'14:00'} temperature={'16°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Rainy'} time={'15:00'} temperature={'7°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Windy'} time={'16:00'} temperature={'21°C'} colorScheme={colorScheme} current={true}/>
            <HourlyWeatherCard weatherVariable={'Lightning'} time={'17:00'} temperature={'13°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Snowy'} time={'18:00'} temperature={'-1°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Sunny'} time={'19:00'} temperature={'24°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Cloudy'} time={'20:00'} temperature={'10°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Rainy'} time={'21:00'} temperature={'6°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Windy'} time={'22:00'} temperature={'17°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Lightning'} time={'23:00'} temperature={'20°C'} colorScheme={colorScheme}/>
            <HourlyWeatherCard weatherVariable={'Snowy'} time={'00:00'} temperature={'-3°C'} colorScheme={colorScheme}/>

        </ScrollView>
    );
}
