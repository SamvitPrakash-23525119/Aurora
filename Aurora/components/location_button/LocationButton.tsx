import cssAdapter from '@/styles/components/locationButton';
import colors from '@/styles/global/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function LocationButton({ weatherVariable } : { weatherVariable: string }) {
    const styles = cssAdapter(weatherVariable);
    const colorScheme = colors(weatherVariable);

    return (
        <TouchableOpacity style={styles.BUTTON} onPress={() => router.push('/location')}>
            <MaterialIcons name="view-carousel" size={45} color={colorScheme.SECONDARY} />
        </TouchableOpacity>
    );
}
