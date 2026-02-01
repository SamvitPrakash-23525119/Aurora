import cssAdapter from '@/styles/components/placeholders/weatherCardPlaceholder';
import { View } from 'react-native';

export default function WeatherCardPlaceholder({ weatherVariable } : { weatherVariable: string }) {
    const styles = cssAdapter(weatherVariable);
    
    return (
        <View style={styles.CARD_CONTAINER}>

        </View>
    );
}