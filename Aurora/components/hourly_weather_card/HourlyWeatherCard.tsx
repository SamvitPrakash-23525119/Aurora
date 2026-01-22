import { View, Text }from 'react-native';

import { Sun } from '@/components/illustrations/Sun';
import { Lightning } from '@/components/illustrations/Lightning';
import { Cloud } from '@/components/illustrations/Cloud';
import { RainDroplets } from '@/components/illustrations/RainDroplets';
import { Snowflakes } from '@/components/illustrations/Snowflakes';
import { Wind } from '@/components/illustrations/Wind';
import cssAdapter from '@/styles/components/hourlyWeatherCard';
    
export default function HourlyWeatherCard({weatherVariable, temperature, time}:{weatherVariable:string, temperature:string, time:string}) {
    const styles = cssAdapter(weatherVariable);

    return (
        <View style={styles.CARD_CONTAINER}>
            {weatherVariable === "Sunny" ? (
				<View style={styles.SUN_ILLUSTRATION_CONTAINER}>
					<Sun size={100}/>
				</View>
			) : weatherVariable === "Lightning" ? (
				<View style={styles.LIGHTNING_ILLUSTRATION_CONTAINER}>
					<Lightning width={120} height={120} />
				</View>
			) : weatherVariable == 'Cloudy' ? (
				<View style={styles.CLOUD_ILLUSTRATION_CONTAINER}>
					<Cloud size={150}/>
				</View>
			) : weatherVariable == 'Rainy' ? (
				<View style={styles.RAIN_ILLUSTRATION_CONTAINER}>
					<RainDroplets size={100}/>
				</View>
			) : weatherVariable == 'Snowy' ? (
				<View style={styles.SNOW_ILLUSTRATION_CONTAINER}>
					<Snowflakes size={100}/>
				</View>
			) : weatherVariable == 'Windy' ? (
				<View style={styles.WIND_ILLUSTRATION_CONTAINER}>
					<Wind size={100}/>
				</View>
			) : null}

			<View style={styles.TIME_CONTAINER}>
				<Text style={styles.TIME_TEXT}>
					{time}
				</Text>
			</View>

			<View style={styles.TEMPERATURE_CONTAINER}>
				<Text style={styles.TEMPERATURE_TEXT}>
					{temperature}
				</Text>
			</View>

			<View style={styles.WEATHER_CONTAINER}>
				<Text style={styles.WEATHER_TEXT}>
					{weatherVariable}
				</Text>
			</View>

        </View>
    );
}
