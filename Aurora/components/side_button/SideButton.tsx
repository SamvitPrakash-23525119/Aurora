import { MaterialIcons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

import cssAdapter from '@/styles/components/sidebutton'
import color from '@/styles/global/colors'

export default function SideButton({weatherVariable, page, icon, top}:{weatherVariable:string, page:string, icon:string, top:string}) {
    const styles = cssAdapter(weatherVariable, top);
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
        <View style={styles.SIDE_BUTTON_CONTAINER}>
            <TouchableOpacity style={styles.TOUCHABLE_OPACITY} onPress={sideMenu}>
                <MaterialIcons name={icon as ComponentProps<typeof MaterialIcons>['name']} size={24} color={colorScheme.SECONDARY} />
            </TouchableOpacity>
        </View>
	);
}
