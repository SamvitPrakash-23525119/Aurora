import { Text, ScrollView, View } from 'react-native';
import cssAdapter from '@/styles/components/weather(Tabs)/metrics';
import HumidityCard from '@/components/humidity_card/HumidityCard';
import SunriseCard from '../sunrise_card/SunriseCard';

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
                <SunriseCard weatherVariable={weatherVariable} time="5:30" />
            </View>

            
        </ScrollView>
    );
}
