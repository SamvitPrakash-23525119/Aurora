import cssAdapter from '@/styles/components/moonriseCard';
import colors from '@/styles/global/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { MoonIcon } from '../illustrations/MoonIcon';

export default function MoonriseCard({ weatherVariable, time }: {weatherVariable: string, time: string}) {
    const styles = cssAdapter(weatherVariable);
    const colorScheme = colors(weatherVariable);

    return (
        <View style={styles.CARD_CONTAINER}>
            <View style={styles.HEADING_CONTAINER}>
                <MoonIcon size={20} color={colorScheme.ACCENT} />
                <Text style={styles.HEADING_TEXT}>Moonrise</Text>
            </View>
            
            <View style={styles.CONTENT_CONTAINER}>
                <Text style={styles.TIME_TEXT}>{time}</Text>
                <MaterialIcons name="access-time" size={20} color={colorScheme.ACCENT} />
            </View>
        </View>
    );
}
