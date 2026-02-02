import cssAdapter, { INPUT } from '@/styles/components/searchBar';
import { useRef, useState } from 'react';
import { Animated, TextInput } from "react-native";

const TOP_OFFSET = 300;

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
    const [value, setValue] = useState('');
    const translateY = useRef(new Animated.Value(0)).current
    const styles = cssAdapter('Lightning');

    const animateToTop = () => {
        Animated.spring(translateY, {
            toValue: -TOP_OFFSET,
            useNativeDriver: true,
        }).start();
    };

    const animateToCenter = () => {
        Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
        }).start();
    };

    const onChangeText = (text: string) => {
        setValue(text);

        if (text.length > 0) {
            animateToTop();
        } else {
            animateToCenter();
        }
    };



    return (
        <Animated.View style={[styles.CONTAINER, { transform: [{ translateY }] }]}>
            <TextInput
                placeholder="Search Location"
                onSubmitEditing={(event) => onSearch(event.nativeEvent.text)}
                onChangeText={onChangeText}
                style={styles.INPUT_CONTAINER}
                placeholderTextColor={INPUT}
            />
        </Animated.View>
    );
}
