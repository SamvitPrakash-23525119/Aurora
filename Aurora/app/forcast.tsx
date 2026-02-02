import WeatherCardPlaceholder from '@/components/placeholders/weather_card/WeatherCardPlaceholder';
import SideButton from '@/components/side_button/SideButton';
import WeatherCard from '@/components/weather_card/WeatherCard';
import colors from '@/styles/global/colors';
import cssAdapter from '@/styles/pages/forecast';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

export default function Forecast() {
    const { weather } = useLocalSearchParams();
    const weatherStr = Array.isArray(weather) ? weather[0] : (weather ?? '');
    const styles = cssAdapter(weatherStr);
    const colorScheme = colors(weatherStr);

    return (
        <View style={styles.PAGE_CONTAINER}>
            <Text style={styles.TEXT_HEADING} >The Week Ahead</Text>
            <SideButton 
                weatherVariable={weatherStr} 
                page={""} 
                icon={"arrow-right"} 
                top={"6%"} 
                invert={true} 
                right={true}
            />

            <ScrollView 
                style={styles.CONTENT_CONTAINER}
                contentContainerStyle={styles.PAGE_CONTENT_CONTAINER} 
                showsHorizontalScrollIndicator={true}
            >

                <WeatherCard weatherVariable={'Sunny'} time={'Monday'} temperature={'18°C'} colorScheme={colorScheme} />
                <WeatherCard weatherVariable={'Windy'} time={'Tuesday'} temperature={'12°C'} colorScheme={colorScheme} current={true}/>
                <WeatherCard weatherVariable={'Cloudy'} time={'Wednesday'} temperature={'22°C'} colorScheme={colorScheme}/>
                <WeatherCard weatherVariable={'Rainy'} time={'Thursday'} temperature={'8°C'} colorScheme={colorScheme}/>
                <WeatherCard weatherVariable={'Lightning'} time={'Friday'} temperature={'15°C'} colorScheme={colorScheme}/>
                <WeatherCard weatherVariable={'Snowy'} time={'Saturday'} temperature={'-2°C'} colorScheme={colorScheme}/>
                <WeatherCard weatherVariable={'Sunny'} time={'Sunday'} temperature={'25°C'} colorScheme={colorScheme}/>
                <WeatherCardPlaceholder weatherVariable={weatherStr} height={1}/>

            </ScrollView>
        </View>
    );
}
