import { View, Text } from 'react-native';
import cssAdapter from '@/styles/components/humidityCard';
import colors from '@/styles/global/colors'
import { HumidityIcon } from '@/components/illustrations/HumidityIcon';

export default function HumidityCard({ weatherVariable, humidity } : { weatherVariable: string, humidity: number }) {
    const styles = cssAdapter(weatherVariable);
    const colorScheme = colors(weatherVariable);

    return (
        <View style={styles.CARD_CONTAINER}>
            
        </View>
    );
}
