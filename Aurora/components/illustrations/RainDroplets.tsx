import Svg, { Path, G } from 'react-native-svg'

export const RainDroplets = ({ size = 100 }: { size?: number }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
    >
      <G transform="rotate(45 50 50)">
        <Path
          d="M30 25 L30 35 Q30 45 25 45 Q20 45 20 35 L20 25 Q20 15 25 15 Q30 15 30 25 Z"
          fill="#8FAFC6"
        />
        <Path
          d="M55 35 L55 50 Q55 62 48 62 Q41 62 41 50 L41 35 Q41 23 48 23 Q55 23 55 35 Z"
          fill="#8FAFC6"
        />
        <Path
          d="M80 30 L80 42 Q80 52 74 52 Q68 52 68 42 L68 30 Q68 20 74 20 Q80 20 80 30 Z"
          fill="#8FAFC6"
        />
        <Path
          d="M40 60 L40 70 Q40 78 35 78 Q30 78 30 70 L30 60 Q30 52 35 52 Q40 52 40 60 Z"
          fill="#8FAFC6"
        />
        <Path
          d="M70 65 L70 77 Q70 86 65 86 Q60 86 60 77 L60 65 Q60 56 65 56 Q70 56 70 65 Z"
          fill="#8FAFC6"
        />
      </G>
    </Svg>
  );
};