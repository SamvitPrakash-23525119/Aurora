import Svg, { Path } from 'react-native-svg';

interface AirQualityIconProps {
	size?: number;
	color?: string;
	className?: string;
}

export function AirQualityIcon({
	size = 48,
	color = "#A55B56",
	className = ""
}: AirQualityIconProps) {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			className={className}
		>
			{/* Wind/air flow lines */}
			<Path
				d="M3 8 Q 8 6, 13 8 T 21 8"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				fill="none"
			/>
			<Path
				d="M3 12 Q 8 10, 13 12 T 21 12"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				fill="none"
			/>
			<Path
				d="M3 16 Q 8 14, 13 16 T 21 16"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				fill="none"
			/>
		</Svg>
	);
}
