import Svg, { Circle, Line, Path } from 'react-native-svg';

interface UVIndexIconProps {
	size?: number;
	color?: string;
}

export function UVIndexIcon({
	size = 48,
	color = "#A55B56",
}: UVIndexIconProps) {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
		>
			<Circle cx="12" cy="9" r="3" fill={color} />

			<Path
				d="M6 14 Q 6.5 15.5, 6 17"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				fill="none"
			/>
			<Path
				d="M10 14 Q 10.5 15.5, 10 17"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				fill="none"
			/>
			<Path
				d="M14 14 Q 14.5 15.5, 14 17"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				fill="none"
			/>
			<Path
				d="M18 14 Q 18.5 15.5, 18 17"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				fill="none"
			/>

			<Line x1="12" y1="2" x2="12" y2="4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
			<Line x1="6.34" y1="4.34" x2="7.76" y2="5.76" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
			<Line x1="17.66" y1="4.34" x2="16.24" y2="5.76" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
			<Line x1="4" y1="9" x2="6" y2="9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
			<Line x1="18" y1="9" x2="20" y2="9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
		</Svg>
	);
}
