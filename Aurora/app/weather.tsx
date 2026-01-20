import { View, Text, PanResponder } from 'react-native'
import { useRef } from 'react'
import { router } from 'expo-router';
import styles from '@/styles/pages/weather';
import { RainDroplets } from '@/components/illustrations/RainDroplets'
import DynamicBackground from '@/components/dynamic_background/DynamicBackground'

export default function Weather() {
	const onPanResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: (_, gesture) => {
				return Math.abs(gesture.dy) > 20;
			},

			onPanResponderRelease: (_, gesture) => {
				if (gesture.dy > 100) {
					router.push("/");
				}
			},
		})
	).current;

	return (

		<DynamicBackground weatherVariable={"Rainy"} gestureHandling={onPanResponder.panHandlers} />
	);
}
