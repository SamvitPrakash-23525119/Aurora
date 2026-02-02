import Gauge from '@/components/illustrations/Gauge';
import { UVIndexIcon } from '@/components/illustrations/UVIndexIcon';
import cssAdapter from '@/styles/components/uvIndex';
import colors from '@/styles/global/colors';
import { Text, View } from 'react-native';

export default function UVIndexCard({ weatherVariable, index }: { weatherVariable: string, index: number }) {
    const styles = cssAdapter(weatherVariable);
    const colorScheme = colors(weatherVariable);

    return (
        <View style={styles.CARD_CONTAINER}>
            <View style={styles.HEADING_CONTAINER}>
                <UVIndexIcon color={colorScheme.ACCENT} size={30} />
                <Text style={styles.HEADING_TEXT}>UV Index</Text>
            </View>
            <Gauge width={175} backgroundColor={colorScheme.ACCENT} fill={colorScheme.SECONDARY} value={index} />
            <Text style={styles.GAUGE_LABEL}>{index}</Text>
        </View>
    );
}
