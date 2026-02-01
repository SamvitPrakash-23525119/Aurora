import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { Cloud } from '@/components/illustrations/Cloud';
import { Lightning } from '@/components/illustrations/Lightning';
import { RainDroplets } from '@/components/illustrations/RainDroplets';
import { Snowflakes } from '@/components/illustrations/Snowflakes';
import { Sun } from '@/components/illustrations/Sun';
import { Wind } from '@/components/illustrations/Wind';
import LocationButton from '@/components/location_button/LocationButton';
import SideButton from '@/components/side_button/SideButton';
import cssAdapter from '@/styles/pages/index';


export default function Index({ weather, city, country, temperature } : { weather?: string, city?: string, country?: string, temperature?: number }) {
	const [weatherVariable, setWeatherVariable] = useState(weather || "Sunny");
	const [City, setCity] = useState(city || "Edenvale");
	const [Country, setCountry] = useState(country || "South Africa");
	const [Temperature, setTemperature] = useState(temperature || 20);
	const styles = cssAdapter(weatherVariable);
	const params = useLocalSearchParams();

	useEffect(() => {		
		if (params.weather) {
			setWeatherVariable(Array.isArray(params.weather) ? params.weather[0] : params.weather);
		}
		if (params.city) {
			setCity(Array.isArray(params.city) ? params.city[0] : params.city);
		}
		if (params.country) {
			setCountry(Array.isArray(params.country) ? params.country[0] : params.country);
		}
		if (params.temperature) {
			const temp = Array.isArray(params.temperature) ? params.temperature[0] : params.temperature;
			setTemperature(parseInt(temp));
		}
	}, [params]);

	return (
		<View style={styles.PAGE_CONTAINER}>
			<View style={styles.MAIN_TEXT_CONTAINER}>
				<Text style={styles.TEXT_SMALL}>
					Tuesday, 20 Jan
				</Text>
				<Text style={styles.TEXT_BIG}>
					{City}
				</Text>
				<Text style={styles.TEXT_SMALL}>
					{Country}
				</Text>
			</View>

			<View style={weatherVariable === "Lightning" ? styles.LIGHTNING_HEADING_CONTAINER :
				weatherVariable === "Rainy" ? styles.RAINY_HEADING_CONTAINER : styles.HEADING_CONTAINER}>
				<Text style={styles.TEXT_HEADING}>
					{weatherVariable}
				</Text>
			</View>

			{!weather && (
				<>
					<SideButton weatherVariable={weatherVariable} page={"weather"} top={"26%"} icon={"insights"} />
					<SideButton weatherVariable={weatherVariable} page={"forcast"} top={"33%"} icon={"landscape"} />
					<SideButton weatherVariable={weatherVariable} page={"forcast"} top={"40%"} icon={"settings"} />
				</>
			)}

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
					{Temperature}°C
				</Text>
			</View>
			<LocationButton weatherVariable={weatherVariable} />

		</View>
	);
}
