import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { Cloud } from '@/components/illustrations/Cloud';
import { Lightning } from '@/components/illustrations/Lightning';
import { RainDroplets } from '@/components/illustrations/RainDroplets';
import { Snowflakes } from '@/components/illustrations/Snowflakes';
import { Sun } from '@/components/illustrations/Sun';
import { Wind } from '@/components/illustrations/Wind';
import SideButton from '@/components/side_button/SideButton';
import cssAdapter from '@/styles/pages/index';


export default function Index() {
	const [weatherVariable, setWeatherVariable] = useState("Windy");
	const styles = cssAdapter(weatherVariable);

	return (
		<View style={styles.PAGE_CONTAINER}>
			<View style={styles.MAIN_TEXT_CONTAINER}>
				<Text style={styles.TEXT_SMALL}>
					Tuesday, 20 Jan
				</Text>
				<Text style={styles.TEXT_BIG}>
					Edenvale
				</Text>
				<Text style={styles.TEXT_SMALL}>
					South Africa
				</Text>
			</View>

			<View style={weatherVariable === "Lightning" ? styles.LIGHTNING_HEADING_CONTAINER :
				weatherVariable === "Rainy" ? styles.RAINY_HEADING_CONTAINER : styles.HEADING_CONTAINER}>
				<Text style={styles.TEXT_HEADING}>
					{weatherVariable}
				</Text>
			</View>

			<SideButton weatherVariable={weatherVariable} page={"weather"} top={"26%"} icon={"insights"} />
			<SideButton weatherVariable={weatherVariable} page={"forcast"} top={"33%"} icon={"landscape"} />
			<SideButton weatherVariable={weatherVariable} page={"forcast"} top={"40%"} icon={"settings"} />

			{weatherVariable === "Sunny" ? (
				<View style={styles.SUN_ILLUSTRATION}>
					<Sun size={300}/>
				</View>
			) : weatherVariable === "Lightning" ? (
				<View style={styles.LIGHTNING_ILLUSTRATION}>
					<Lightning />
				</View>
			) : weatherVariable == 'Cloudy' ? (
				<View style={styles.CLOUD_ILLUSTRATION}>
					<Cloud size={400}/>
				</View>
			) : weatherVariable == 'Rainy' ? (
				<View style={styles.RAIN_ILLUSTRATION}>
					<RainDroplets size={350}/>
				</View>
			) : weatherVariable == 'Snowy' ? (
				<View style={styles.SNOW_ILLUSTRATION}>
					<Snowflakes size={350}/>
				</View>
			) : weatherVariable == 'Windy' ? (
				<View style={styles.WIND_ILLUSTRATION}>
					<Wind size={350}/>
				</View>
			) : null}

			<View style={styles.TEMPERATURE_CONTAINER}>
				<Text style={styles.TEMPERATURE_TEXT}>
					27°C
				</Text>
			</View>
		</View>
	);
}
