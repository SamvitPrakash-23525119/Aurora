import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { SunsetIcon } from '@/components/illustrations/SunsetIcon';
import colors from '@/styles/global/colors';
import cssAdapter from '@/styles/components/sunsetCard';

export default function SunsetCard({ weatherVariable, time }: {weatherVariable: string, time: string}) {
    const styles = cssAdapter(weatherVariable);
    const colorScheme = colors(weatherVariable);

    return (
        <View style={styles.CARD_CONTAINER}>
            <View style={styles.HEADING_CONTAINER}>
                <SunsetIcon size={25} fill={colorScheme.SECONDARY} />
                <Text style={styles.HEADING_TEXT}>Sunset</Text>
            </View>
            
            <View style={styles.CONTENT_CONTAINER}>
                <Text style={styles.TIME_TEXT}>{time}</Text>
                <MaterialIcons name="access-time" size={20} color={colorScheme.SECONDARY} />
            </View>
        </View>
    );
}
