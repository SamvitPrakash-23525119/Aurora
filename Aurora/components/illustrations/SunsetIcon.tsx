import Svg, { Line, Circle } from 'react-native-svg'

interface SunsetIconProps {
	size?: number;
	fill?: string;
}

export function SunsetIcon({ size = 48, fill }: SunsetIconProps) {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
		>

			<Circle cx="12" cy="12" r="4" fill={fill} />

			<Line x1="2" y1="20" x2="22" y2="20" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />

			<Line x1="12" y1="2" x2="12" y2="5" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
			<Line x1="5.64" y1="5.64" x2="7.76" y2="7.76" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
			<Line x1="2" y1="12" x2="5" y2="12" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
			<Line x1="19" y1="12" x2="22" y2="12" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
			<Line x1="16.24" y1="7.76" x2="18.36" y2="5.64" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />

		</Svg>
	);
}
