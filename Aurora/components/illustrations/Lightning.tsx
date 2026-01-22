import Svg, { Path, G } from 'react-native-svg'

export function Lightning() {
	return (
		<Svg
			width="400"
			height="600"
			viewBox="0 0 400 600"
			className="drop-shadow-lg"
		>

			<Path
				d="M 200 50 L 180 150 L 190 150 L 170 250 L 185 250 L 160 380 L 175 380 L 150 500"
				stroke="#A55B56"
				strokeWidth="6"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<Path
				d="M 180 150 L 220 200 L 230 250"
				stroke="#A55B56"
				strokeWidth="4"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* Branch 2 - middle left */}
			<Path
				d="M 170 250 L 140 280 L 130 320"
				stroke="#A55B56"
				strokeWidth="4"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* Branch 3 - middle right */}
			<Path
				d="M 185 250 L 215 290 L 225 330"
				stroke="#A55B56"
				strokeWidth="3.5"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* Branch 4 - lower left */}
			<Path
				d="M 160 380 L 130 420 L 120 460"
				stroke="#A55B56"
				strokeWidth="3"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* Branch 5 - lower right */}
			<Path
				d="M 175 380 L 200 420 L 210 465"
				stroke="#A55B56"
				strokeWidth="3"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* Sub-branch from Branch 1 */}
			<Path
				d="M 220 200 L 250 220 L 260 245"
				stroke="#A55B56"
				strokeWidth="2.5"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* Sub-branch from Branch 2 */}
			<Path
				d="M 140 280 L 110 295 L 100 315"
				stroke="#A55B56"
				strokeWidth="2.5"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}


// export const Lightning = ({ size = 100 }: { size?: number }) => {
// 	return (
// 		<Svg
// 			width={size}
// 			height={size}
// 			viewBox="0 0 100 100"
// 			fill="none"
// 		>
// 			<G transform="rotate(25 50 50)">
// 				<Path
// 					d="M55 10 L30 50 L45 50 L35 90 L70 45 L55 45 L65 10 Z"
// 					fill="#96535A"
// 				/>
// 			</G>
// 		</Svg>
// 	);
// };