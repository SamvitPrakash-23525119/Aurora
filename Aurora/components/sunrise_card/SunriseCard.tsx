import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { Sun } from '@/components/illustrations/Sun';
import colors from '@/styles/global/colors';
import cssAdapter from '@/styles/components/sunriseCard';

export default function SunriseCard({ weatherVariable, time }: {weatherVariable: string, time: string}) {
    const styles = cssAdapter(weatherVariable);
    const colorScheme = colors(weatherVariable);

    return (
        <View style={styles.CARD_CONTAINER}>
            <View style={styles.HEADING_CONTAINER}>
                <Sun size={30} color={colorScheme.SECONDARY} />
                <Text style={styles.HEADING_TEXT}>Sunrise</Text>
            </View>
            
            <View style={styles.CONTENT_CONTAINER}>
                <Text style={styles.TIME_TEXT}>{time}</Text>
                <MaterialIcons name="access-time" size={20} color={colorScheme.SECONDARY} />
            </View>
        </View>
    );
}
