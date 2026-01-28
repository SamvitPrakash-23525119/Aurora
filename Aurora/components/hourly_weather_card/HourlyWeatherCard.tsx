import { Text, View } from 'react-native';

import { Cloud } from '@/components/illustrations/Cloud';
import { Lightning } from '@/components/illustrations/Lightning';
import { RainDroplets } from '@/components/illustrations/RainDroplets';
import { Snowflakes } from '@/components/illustrations/Snowflakes';
import { Sun } from '@/components/illustrations/Sun';
import { Wind } from '@/components/illustrations/Wind';
import cssAdapter from '@/styles/components/hourlyWeatherCard';

export default function HourlyWeatherCard({weatherVariable, temperature, time, colorScheme, current}:{weatherVariable:string, temperature:string, time:string, colorScheme:any, current?:boolean}) {
    const styles = cssAdapter(weatherVariable, colorScheme, current);

    return (
        <View style={styles.CARD_CONTAINER}>
            {weatherVariable === "Sunny" ? (
				<View style={styles.SUN_ILLUSTRATION_CONTAINER}>
					<Sun size={100} color={!current ? colorScheme.ACCENT : undefined}/>
				</View>
			) : weatherVariable === "Lightning" ? (
				<View style={styles.LIGHTNING_ILLUSTRATION_CONTAINER}>
					<Lightning width={120} height={120} fill={!current ? colorScheme.ACCENT : undefined}/>
				</View>
			) : weatherVariable == 'Cloudy' ? (
				<View style={styles.CLOUD_ILLUSTRATION_CONTAINER}>
					<Cloud size={150} fill={!current ? colorScheme.ACCENT : undefined}/>
				</View>
			) : weatherVariable == 'Rainy' ? (
				<View style={styles.RAIN_ILLUSTRATION_CONTAINER}>
					<RainDroplets size={100} fill={!current ? colorScheme.ACCENT : undefined}/>
				</View>
			) : weatherVariable == 'Snowy' ? (
				<View style={styles.SNOW_ILLUSTRATION_CONTAINER}>
					<Snowflakes size={100} fill={!current ? colorScheme.ACCENT : undefined}/>
				</View>
			) : weatherVariable == 'Windy' ? (
				<View style={styles.WIND_ILLUSTRATION_CONTAINER}>
					<Wind size={100} fill={!current ? colorScheme.ACCENT : undefined}/>
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
