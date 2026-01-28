import { AirQualityIcon } from '@/components/illustrations/AirQualityIcon';
import VerticalProgressBar from '@/components/vertical_progress_bar/VerticalProgressBar';
import cssAdapter from '@/styles/components/airQualityCard';
import colors from '@/styles/global/colors';
import { Text, View } from 'react-native';

export default function AirQualityCard({ weatherVariable, airQualityIndex } : { weatherVariable: string, airQualityIndex: number }) {
    const styles = cssAdapter(weatherVariable);
    const colorScheme = colors(weatherVariable);

    return (
        <View style={styles.CARD_CONTAINER}>
            <View style={styles.HEADING_CONTAINER}>
                <AirQualityIcon size={30} color={colorScheme.ACCENT} />
                <Text style={styles.HEADING_TEXT}>AirQuality</Text>
            </View>

            <VerticalProgressBar value={(airQualityIndex/500)*100} weatherVariable={weatherVariable} height={100} raw={true} rawValue={airQualityIndex}/>
        </View>
    );
}
