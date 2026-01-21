import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

import cssAdapter from '@/styles/components/sidebutton'
import color from '@/styles/global/colors'

export default function SideButton({weatherVariable, page, invert}:{weatherVariable:string, page:string, invert?:boolean}) {
    const styles = cssAdapter(weatherVariable);
    const colorScheme = color(weatherVariable);

    const sideMenu = () => {
        router.push({
            pathname: ('/' + page) as any,
            params: {
                weather: weatherVariable
            }
        });
    };

	return (
        <View style={invert?styles.INVERTED_SIDE_BUTTON_CONTAINER:styles.SIDE_BUTTON_CONTAINER}>
            <TouchableOpacity style={invert?styles.INVERTED_TOUCHABLE_OPACITY:styles.TOUCHABLE_OPACITY} onPress={sideMenu}>
                <MaterialIcons name={invert?"calendar-view-week":"menu"} size={24} color={colorScheme.SECONDARY} />
            </TouchableOpacity>
        </View>
	);
}
