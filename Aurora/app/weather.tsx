import { PanResponder } from 'react-native'
import { useRef } from 'react'
import { router } from 'expo-router';
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

		<DynamicBackground weatherVariable={"Cloudy"} gestureHandling={onPanResponder.panHandlers} />
	);
}
