import { MaterialIcons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

import cssAdapter from '@/styles/components/sideButton'
import color from '@/styles/global/colors'

export default function SideButton({weatherVariable, page, icon, top, invert, right}:{weatherVariable:string, page:string, icon:string, top:string, invert?:boolean, right?:boolean}) {
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
        <View style={[styles.SIDE_BUTTON_CONTAINER, styles[right ? 'SIDE_BUTTON_CONTAINER_RIGHT' : 'SIDE_BUTTON_CONTAINER_LEFT'], styles[invert ? 'COLOR_INVERT' : 'COLOR']]}>
            <TouchableOpacity style={[styles.TOUCHABLE_OPACITY, styles[invert ? 'COLOR_INVERT' : 'COLOR']]} onPress={sideMenu}>
                <MaterialIcons name={icon as ComponentProps<typeof MaterialIcons>['name']} size={24} color={colorScheme[invert ?  'ACCENT' : 'SECONDARY']} />
            </TouchableOpacity>
        </View>
	);
}
