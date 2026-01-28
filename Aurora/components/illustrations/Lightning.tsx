import Svg, { Path } from 'react-native-svg';

export function Lightning({width=400, height=600, fill="#A55B56"}) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 400 600"
			className="drop-shadow-lg"
		>

			<Path
				d="M 200 50 L 180 150 L 190 150 L 170 250 L 185 250 L 160 380 L 175 380 L 150 500"
				stroke={fill}
				strokeWidth="6"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<Path
				d="M 180 150 L 220 200 L 230 250"
				stroke={fill}
				strokeWidth="4"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<Path
				d="M 170 250 L 140 280 L 130 320"
				stroke={fill}
				strokeWidth="4"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<Path
				d="M 185 250 L 215 290 L 225 330"
				stroke={fill}
				strokeWidth="3.5"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<Path
				d="M 160 380 L 130 420 L 120 460"
				stroke={fill}
				strokeWidth="3"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<Path
				d="M 175 380 L 200 420 L 210 465"
				stroke={fill}
				strokeWidth="3"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<Path
				d="M 220 200 L 250 220 L 260 245"
				stroke={fill}
				strokeWidth="2.5"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<Path
				d="M 140 280 L 110 295 L 100 315"
				stroke={fill}
				strokeWidth="2.5"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}