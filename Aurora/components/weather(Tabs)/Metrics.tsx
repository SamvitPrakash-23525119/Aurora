import { Text, ScrollView, View } from 'react-native';
import cssAdapter from '@/styles/components/weather(Tabs)/metrics';
import HumidityCard from '@/components/humidity_card/HumidityCard';

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
                <HumidityCard humidity={75} weatherVariable={weatherVariable} />
            </View>

            
        </ScrollView>
    );
}
