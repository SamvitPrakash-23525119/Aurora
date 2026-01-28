import AirQualityCard from '@/components/air_quality_card/AirQualityCard';
import HumidityCard from '@/components/humidity_card/HumidityCard';
import SunriseCard from '@/components/sunrise_card/SunriseCard';
import SunsetCard from '@/components/sunset_card/SunsetCard';
import UVIndexCard from '@/components/uv_index_card/UVIndexCard';
import cssAdapter from '@/styles/components/weather(Tabs)/metrics';
import { ScrollView, Text, View } from 'react-native';

export default function Metrics({ weatherVariable } : { weatherVariable: string }) {
    const styles = cssAdapter(weatherVariable);

    return (
        <ScrollView 
            contentContainerStyle={styles.PAGE_CONTENT_CONTAINER} 
            showsHorizontalScrollIndicator={true}
        >
            <Text style={styles.TEXT_HEADING} >Sky Science</Text>

            <View style={styles.ROW_CONTAINER}>
                <HumidityCard humidity={75} weatherVariable={weatherVariable} />
                <UVIndexCard weatherVariable={weatherVariable} index={7} /> 
            </View>

            <View style={styles.ROW_CONTAINER}>
                <SunriseCard weatherVariable={weatherVariable} time="5:30" />
                <SunsetCard weatherVariable={weatherVariable} time="18:45" />
            </View>

            <View style={styles.ROW_CONTAINER}>
                <UVIndexCard weatherVariable={weatherVariable} index={7} /> 
                <AirQualityCard weatherVariable={weatherVariable} airQualityIndex={155} />
            </View>

        </ScrollView>
    );
}
