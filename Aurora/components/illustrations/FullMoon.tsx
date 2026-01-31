import Svg, { Circle } from "react-native-svg";

export function FullMoon({ size = 24, color }: { size?: number; color?: string }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">

            <Circle
                cx="12"
                cy="12"
                r="9"
                fill= {color }
            />

        </Svg>
    );
}
