import { FirstQuarter } from '@/components/illustrations/FirstQuarterMoon';
import { FullMoon } from '@/components/illustrations/FullMoon';
import { LastQuarter } from '@/components/illustrations/LastQuarterMoon';
import { NewMoon } from '@/components/illustrations/NewMoon';
import { WaningCrescentMoon } from '@/components/illustrations/WaningCrescentMoon';
import { WaningGibbous } from '@/components/illustrations/WaningGibbousMoon';
import { WaxingCrescentMoon } from '@/components/illustrations/WaxingCrescentMoon';
import { WaxingGibbous } from '@/components/illustrations/WaxingGibbousMoon';

export default function RenderMoonIllustration({ phase, color }: { phase: string, color: string }) {
    switch (phase) {
        case 'New Moon':
            return <NewMoon color={color} size={70} />;
        case 'Waxing Crescent':
            return <WaxingCrescentMoon color={color} size={70} />;
        case 'First Quarter':
            return <FirstQuarter color={color} size={70} />;
        case 'Waxing Gibbous':
            return <WaxingGibbous color={color} size={70} />;
        case 'Full Moon':
            return <FullMoon color={color} size={70} />;
        case 'Waning Gibbous':
            return <WaningGibbous color={color} size={70} />;
        case 'Last Quarter':
            return <LastQuarter color={color} size={70} />;
        case 'Waning Crescent':
            return <WaningCrescentMoon color={color} size={70} />;
        default:
            return <></>;
    }
}
