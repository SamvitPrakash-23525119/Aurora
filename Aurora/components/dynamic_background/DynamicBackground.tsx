import { View } from 'react-native'
import { Sun } from "@/components/illustrations/Sun";
import { Wind } from '@/components/illustrations/Wind'
import { RainDroplets } from '@/components/illustrations/RainDroplets'
import { Cloud } from '../illustrations/Cloud';
import { Lightning } from '../illustrations/Lightning';
import { Snowflakes } from '../illustrations/Snowflakes';

export default function DynamicBackground() {
  return (
    <View>
      <RainDroplets />
      <Wind />
      <Sun />
      <Cloud />
      <Lightning />
      <Snowflakes />
    </View>
  );
}
