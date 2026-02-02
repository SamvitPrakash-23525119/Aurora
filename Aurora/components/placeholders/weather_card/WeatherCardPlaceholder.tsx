import cssAdapter from '@/styles/components/placeholders/weatherCardPlaceholder';
import { View } from 'react-native';

export default function WeatherCardPlaceholder({ weatherVariable, height } : { weatherVariable: string, height: number }) {
    const styles = cssAdapter(weatherVariable, height);

    return (
        <View style={styles.CARD_CONTAINER}>

        </View>
    );
}