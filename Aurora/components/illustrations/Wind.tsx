import Svg, { G, Path } from 'react-native-svg';

export const Wind = ({ size = 100, fill="#ECDCC6" }: { size?: number, fill?: string }) => {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 100 100"
			fill="none"
		>
			<G transform="rotate(140 50 50)">
				<Path
					d="M10 30 L60 30 Q70 30 70 20 Q70 10 60 10 Q55 10 53 13"
					stroke={fill}
					strokeWidth="3"
					strokeLinecap="round"
					fill="none"
				/>
				<Path
					d="M10 50 L75 50 Q85 50 85 40 Q85 30 75 30 Q70 30 68 33"
					stroke={fill}
					strokeWidth="3"
					strokeLinecap="round"
					fill="none"
				/>
				<Path
					d="M10 70 L55 70 Q65 70 65 80 Q65 90 55 90 Q50 90 48 87"
					stroke={fill}
					strokeWidth="3"
					strokeLinecap="round"
					fill="none"
				/>
			</G>
		</Svg>
	);
};