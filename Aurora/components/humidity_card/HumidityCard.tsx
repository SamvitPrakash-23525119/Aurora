import { HumidityIcon } from '@/components/illustrations/HumidityIcon';
import VerticalProgressBar from '@/components/vertical_progress_bar/VerticalProgressBar';
import cssAdapter from '@/styles/components/humidityCard';
import colors from '@/styles/global/colors';
import { Text, View } from 'react-native';

export default function HumidityCard({ weatherVariable, humidity } : { weatherVariable: string, humidity: number }) {
    const styles = cssAdapter(weatherVariable);
    const colorScheme = colors(weatherVariable);

    return (
        <View style={styles.CARD_CONTAINER}>
            <View style={styles.HEADING_CONTAINER}>
                <HumidityIcon size={30} fill={colorScheme.ACCENT} outline={colorScheme.SECONDARY} />
                <Text style={styles.HEADING_TEXT}>Humidity</Text>
            </View>

            <VerticalProgressBar value={humidity} weatherVariable={weatherVariable} height={100}/>
        </View>
    );
}
