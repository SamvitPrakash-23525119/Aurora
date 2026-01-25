import { Text, ScrollView } from 'react-native';
import cssAdapter from '@/styles/components/weather(Tabs)/metrics';

export default function Metrics({ weatherVariable } : { weatherVariable: string }) {
    const styles = cssAdapter(weatherVariable);

    return (
        <ScrollView 
            style={styles.PAGE_CONTAINER} 
            contentContainerStyle={styles.PAGE_CONTENT_CONTAINER} 
            showsHorizontalScrollIndicator={true}
        >
            <Text style={styles.TEXT_HEADING} >Sky Science</Text>

            
        </ScrollView>
    );
}
