import AirQualityCard from '@/components/air_quality_card/AirQualityCard';
import HumidityCard from '@/components/humidity_card/HumidityCard';
import SunriseCard from '@/components/sunrise_card/SunriseCard';
import SunsetCard from '@/components/sunset_card/SunsetCard';
import UVIndexCard from '@/components/uv_index_card/UVIndexCard';
import VisibilityCard from '@/components/visibility_card/VisibilityCard';
import cssAdapter from '@/styles/components/weather(Tabs)/metrics';
import { ScrollView, Text, View } from 'react-native';
import MoonriseCard from '../moonrise_card/MoonriseCard';
import MoonsetCard from '../moonset_card/MoonsetCard';

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
                <AirQualityCard weatherVariable={weatherVariable} airQualityIndex={155} />
            </View>

            <View style={styles.ROW_CONTAINER}>
                <SunriseCard weatherVariable={weatherVariable} time="5:30" />
                <MoonriseCard weatherVariable={weatherVariable} time="18:30" />
            </View>

            <View style={styles.ROW_CONTAINER}>
                <SunsetCard weatherVariable={weatherVariable} time="18:45" />
                <MoonsetCard weatherVariable={weatherVariable} time="18:30" />
            </View>

            <View style={styles.ROW_CONTAINER}>
                <UVIndexCard weatherVariable={weatherVariable} index={5} /> 
                <AirQualityCard weatherVariable={weatherVariable} airQualityIndex={300} />
            </View>

            <View style={styles.ROW_CONTAINER}>
                <VisibilityCard weatherVariable={weatherVariable} visibility={'10'} />
            </View>

        </ScrollView>
    );
}
