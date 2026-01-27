import { View, Pressable } from 'react-native';
import cssAdapter from '@/styles/components/dotIndicator';

type Props = {
    count: number;
    activeIndex: number;
    onPress: (index: number) => void;
    weatherVariable: string;
};

export default function DotIndicator({ count, activeIndex, onPress, weatherVariable } : Props){
    const styles = cssAdapter(weatherVariable);

    return (
        <View style={styles.DOT_CONTAINER}>
            {Array.from({ length: count }).map((_, i) => (
                <Pressable
                    key={i}
                    onPress={() => onPress(i)}
                    style={[
                        styles.DOT,
                        i === activeIndex && styles.ACTIVE_DOT,
                    ]}
                />
            ))}
        </View>
    );

}

