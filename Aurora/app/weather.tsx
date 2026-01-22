import { View, TextInput, PanResponder } from 'react-native'
import { useRef } from 'react';
import { router, useLocalSearchParams } from 'expo-router';

import  cssAdapter from '@/styles/pages/weather';
import SideButton from '@/components/side_button/SideButton';

export default function Weather() {
    const { weather } = useLocalSearchParams();
    const styles = cssAdapter(weather);
    const weatherStr = Array.isArray(weather) ? weather[0] : (weather ?? '');

    const onPanResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gesture) => {
                return Math.abs(gesture.dy) > 15;
            },

            onPanResponderRelease: (_, gesture) => {
                if (gesture.dy > 50) {
                    router.push("/");
                }
            },
        })
    ).current;

    return (
        <View style={styles.PAGE_CONTAINER} {...onPanResponder.panHandlers}>
            <SideButton weatherVariable={weatherStr} page={""} icon={"arrow-right"} top={"10%"} invert={true} right={true}/>

        </View>
    );
}
