import Svg, { Path, G } from 'react-native-svg'

export const Lightning = ({ size = 100 }: { size?: number }) => {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 100 100"
			fill="none"
		>
			<G transform="rotate(25 50 50)">
				<Path
					d="M55 10 L30 50 L45 50 L35 90 L70 45 L55 45 L65 10 Z"
					fill="#96535A"
				/>
			</G>
		</Svg>
	);
};