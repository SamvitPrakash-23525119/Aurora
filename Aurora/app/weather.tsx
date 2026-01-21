import { View, TextInput, PanResponder } from 'react-native'
import { useRef } from 'react';
import { router, useLocalSearchParams } from 'expo-router';

import  cssAdapter from '@/styles/pages/weather';

export default function Weather() {
    const { weather } = useLocalSearchParams();
    const styles = cssAdapter(weather);

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
            

        </View>
    );
}
