import Svg, { Circle } from "react-native-svg";

export function NewMoon({ size = 24, color }: { size?: number; color?: string }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Circle
                cx="12"
                cy="12"
                r="9"
                stroke={color}
                strokeWidth={0.5}
                fill="none"
            />

        </Svg>
    );
}
