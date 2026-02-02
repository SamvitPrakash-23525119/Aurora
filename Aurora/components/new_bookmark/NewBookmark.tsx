import { styles } from '@/styles/components/newBookmark';
import { GENERAL_ACCENT } from '@/styles/global/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function NewBookmark() {
    return (
        <View style={styles.PAGE_CONTAINER}>
            <MaterialIcons name="add-circle" size={50} color={GENERAL_ACCENT} />
        </View>
    );
}
