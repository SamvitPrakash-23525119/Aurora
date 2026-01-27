import Svg, { Circle, Line } from 'react-native-svg'

export const Sun = ({ size = 100 }: { size?: number }) => {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 100 100"
			fill="none"
		>
			<Circle cx="50" cy="50" r="20" fill="#EB534E" />
			<Line x1="50" y1="10" x2="50" y2="20" stroke="#EB534E" strokeWidth="2" strokeLinecap="round" />
			<Line x1="50" y1="80" x2="50" y2="90" stroke="#EB534E" strokeWidth="2" strokeLinecap="round" />
			<Line x1="10" y1="50" x2="20" y2="50" stroke="#EB534E" strokeWidth="2" strokeLinecap="round" />
			<Line x1="80" y1="50" x2="90" y2="50" stroke="#EB534E" strokeWidth="2" strokeLinecap="round" />
			<Line x1="21.72" y1="21.72" x2="28.79" y2="28.79" stroke="#EB534E" strokeWidth="2" strokeLinecap="round" />
			<Line x1="71.21" y1="71.21" x2="78.28" y2="78.28" stroke="#EB534E" strokeWidth="2" strokeLinecap="round" />
			<Line x1="21.72" y1="78.28" x2="28.79" y2="71.21" stroke="#EB534E" strokeWidth="2" strokeLinecap="round" />
			<Line x1="71.21" y1="28.79" x2="78.28" y2="21.72" stroke="#EB534E" strokeWidth="2" strokeLinecap="round" />
		</Svg>
	);
};
