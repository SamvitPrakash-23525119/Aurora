import Svg, { ClipPath, Defs, G, Line, Path, Rect } from 'react-native-svg';

interface MoonHorizonIconProps {
	size?: number;
	color?: string;
}

export function MoonHorizonIcon({
	size = 48,
	color = "#A55B56",
}: MoonHorizonIconProps) {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
		>
			<Defs>
				<ClipPath id="horizonClip">
					<Rect x="0" y="0" width="24" height="17" />
				</ClipPath>
			</Defs>

			<G clipPath="url(#horizonClip)">
				<Path
					d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
					fill={color}
					stroke={color}
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</G>
			
			<Line x1="2" y1="20" x2="22" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
		</Svg>
	);
}
