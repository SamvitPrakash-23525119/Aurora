import Svg, { Circle, Path } from 'react-native-svg';

export const VisibilityIcon = ({ size, color }: { size: number, color: string }) => {
	return (
		<Svg
			width={size}
			height={size}
			viewBox='0 0 24 24'
		>
			<Svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
			>
				{/* Eye outline */}
				<Path
					d="
						M2 12
						C4.5 7.5, 9 5, 12 5
						C15 5, 19.5 7.5, 22 12
						C19.5 16.5, 15 19, 12 19
						C9 19, 4.5 16.5, 2 12
						Z
					"
					stroke={color}
					strokeWidth={2}
					strokeLinejoin="round"
				/>

				{/* Pupil */}
				<Circle
					cx={12}
					cy={12}
					r={3}
					fill={color}
				/>
			</Svg>


		</Svg>
	);
}

