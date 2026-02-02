import Svg, { Path } from "react-native-svg";

export function WaningCrescentMoon({ size = 24, color }: { size?: number; color?: string; }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            {/* <Circle
                cx="12"
                cy="12"
                r="10"
                stroke={color}
                strokeWidth={0.5}
                fill="none"
            /> */}

            <Path
                d="M12 3
                   A 9 9 0 0 0 12 21
                   A 6 8 0 0 1 12 3
                   "
                fill={color}
            />
        </Svg>
    );
}
