import Svg, { Path } from 'react-native-svg'

export const Cloud = ({ size = 100 }: { size?: number }) => {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 100 100"
			fill="none"
		>
			<Path
				d="M25 55 Q25 45 35 45 Q35 35 45 35 Q55 35 60 40 Q65 35 72 35 Q80 35 80 43 Q88 43 88 52 Q88 60 80 60 L30 60 Q20 60 20 52 Q20 45 25 45 Z"
				fill="#9A5859"
			/>
		</Svg>
	);
};
