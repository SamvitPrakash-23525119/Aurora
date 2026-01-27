import Svg, { Path } from 'react-native-svg';

export function HumidityIcon({ size, fill, outline} : {size: number, fill: string, outline: string}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M12 2.69L12.9 3.89C15.69 7.61 18 10.88 18 14C18 17.31 15.31 20 12 20C8.69 20 6 17.31 6 14C6 10.88 8.31 7.61 11.1 3.89L12 2.69Z"
        fill={fill}
        stroke={outline}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
