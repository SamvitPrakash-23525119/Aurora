import { Text, View, StyleSheet } from "react-native";
import styles  from '../styles/index'

export default function Index() {
	const title = "AURORA";

	return (
		<>
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
				<Text style={styles.WELCOME_HINT}>
					Swipe up to continue
				</Text>
				<Text>
					^
				</Text>
			</View>
		</>
	);
}
