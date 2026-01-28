import Svg, { Path } from "react-native-svg";

export default function Gauge({ width = 200, height = 120, value, backgroundColor, fill}: { width?: number, height?: number, value: number, backgroundColor: string, fill: string}) {
    const centerX = width / 2;
    const centerY = height * 0.8;
    const radius = Math.min(width, height * 1.6) * 0.35;
    const stroke = radius * 0.15;
    const MAX = 11;
    
    const progress = Math.min(value / MAX, 1);
    const arcLength = Math.PI * radius;
    const dashOffset = arcLength * (1 - progress);

    return (
        <Svg width={width} height={height}>
            <Path
                d={`M ${centerX - radius} ${centerY}
                    A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
                stroke={backgroundColor}
                strokeWidth={stroke + 2}
                fill="none"
                strokeLinecap="round"
            />

            <Path
                d={`M ${centerX - radius} ${centerY}
                    A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
                stroke={fill}
                strokeWidth={stroke}
                fill="none"
                strokeDasharray={arcLength}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
            />
        </Svg>
    );
}
