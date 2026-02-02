import Svg, { G, Line } from 'react-native-svg';

export const Snowflakes = ({ size = 100, fill="#E1ECE8" }: { size?: number, fill?: string }) => {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 100 100"
			fill="none"
		>
			
			<G>
				<Line x1="50" y1="25" x2="50" y2="55" stroke={fill} strokeWidth="2" />
				<Line x1="35" y1="32.5" x2="65" y2="47.5" stroke={fill} strokeWidth="2" />
				<Line x1="35" y1="47.5" x2="65" y2="32.5" stroke={fill} strokeWidth="2" />
			</G>

			<G>
				<Line x1="25" y1="65" x2="25" y2="85" stroke={fill} strokeWidth="1.5" />
				<Line x1="15" y1="70" x2="35" y2="80" stroke={fill} strokeWidth="1.5" />
				<Line x1="15" y1="80" x2="35" y2="70" stroke={fill} strokeWidth="1.5" />
			</G>

			<G>
				<Line x1="75" y1="70" x2="75" y2="88" stroke={fill} strokeWidth="1.5" />
				<Line x1="66" y1="74" x2="84" y2="84" stroke={fill} strokeWidth="1.5" />
				<Line x1="66" y1="84" x2="84" y2="74" stroke={fill} strokeWidth="1.5" />
			</G>
		</Svg>
	);
};
