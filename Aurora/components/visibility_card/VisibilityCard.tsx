import { VisibilityIcon } from '@/components/illustrations/VisibilityIcon';
import cssAdapter from '@/styles/components/visibilityCard';
import colors from '@/styles/global/colors';
import { Text, View } from 'react-native';

export default function VisibilityCard({ weatherVariable, visibility }: {weatherVariable: string, visibility: string}) {
    const styles = cssAdapter(weatherVariable);
    const colorScheme = colors(weatherVariable);

    return (
        <View style={styles.CARD_CONTAINER}>
            <View style={styles.HEADING_CONTAINER}>
                <VisibilityIcon size={24} color={colorScheme.ACCENT} />
                <Text style={styles.HEADING_TEXT}>Visibility</Text>
            </View>
            
            <View style={styles.CONTENT_CONTAINER}>
                <Text style={styles.DISTANCE_TEXT}>{visibility} km</Text>
            </View>
        </View>
    );
}
