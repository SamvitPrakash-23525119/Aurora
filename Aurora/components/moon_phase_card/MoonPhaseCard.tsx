import { MoonPhaseIcon } from '@/components/illustrations/MoonPhaseIcon';
import RenderMoonIllustration from '@/components/render_moon_illustration/RenderMoonIllustration';

import cssAdapter from '@/styles/components/moonPhaseCard';
import colors from '@/styles/global/colors';
import { Text, View } from 'react-native';

export default function MoonPhaseCard({ weatherVariable, phase, illumination } : { weatherVariable: string, phase: string, illumination: number }) {
    const styles = cssAdapter(weatherVariable);
    const colorScheme = colors(weatherVariable);

    return (
        <View style={styles.CARD_CONTAINER}>
            <View style={styles.HEADING_CONTAINER}>
                <MoonPhaseIcon size={25} color={colorScheme.ACCENT} />
                <Text style={styles.HEADING_TEXT}>Moon Phase</Text>
            </View>

            <RenderMoonIllustration phase={phase} color={colorScheme.ACCENT} />

            <View style={styles.CONTENT_CONTAINER}>
                <Text style={styles.PHASE_TEXT}>{phase}</Text>
                <Text style={styles.ILLUMINATION_TEXT}>Illumination {illumination}%</Text>
            </View>

        </View>
    );
}
