import { Text, View, TouchableOpacity, PanResponder } from "react-native";
import { router } from 'expo-router'
import { useRef } from 'react'
import styles  from '@/styles/pages/index'

export default function Index() {
	const title = "AURORA";

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: (_, gesture) => {
				return Math.abs(gesture.dy) > 20;
			},

			onPanResponderRelease: (_, gesture) => {
				if (gesture.dy < -100) {
					router.push("/weather");
				}
			},
		})
	).current;

	return (
		<View {...panResponder.panHandlers} style={styles.PAGE_CONTAINER} >
			<View style={styles.TITLE_CONTAINER}>
				<View style={styles.TITLE_TEXT_CONTAINER}>
					{title.split('').map((letter, index) => (
						<Text key={index} style={styles.TITLE_TEXT}>
							{letter}
						</Text>
					))}
				</View>
				<View style={styles.TITLE_ICON}>

				</View>
			</View>
			<View style={styles.WELCOME_CONTAINER}>
				<Text style={styles.WELCOME_TEXT}>
					Welcome to {title}
				</Text>
				{/* <Text style={styles.WELCOME_HINT}>
					Swipe up to continue
				</Text> */}
				<TouchableOpacity onPress={() => router.push("/weather")}>
					<Text style={styles.WELCOME_ACTION}>Go to Weather</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
