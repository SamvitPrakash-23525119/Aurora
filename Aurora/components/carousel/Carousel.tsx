import { router } from 'expo-router';
import React, { useRef } from 'react';
import { Animated, Dimensions, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const CARD_WIDTH = width * 0.88;
const CARD_HEIGHT = height * 0.75;
const SPACING = (width - CARD_WIDTH) / 2;

export default function Carousel({ pages }: { pages: any }) {
    const scrollX = useRef(new Animated.Value(0)).current;

    const onNavigate = ( item : any ) => {
        router.push({
            pathname: (item?.page === 'bookmark' ? '/bookmark' : '/' as any),
            params: {
                weather: item?.weather,
                city: item?.city,
                country: item?.country,
                temperature: item?.temperature
            }
        });
    };

    return (
        <Animated.FlatList
            data={pages}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH}
            decelerationRate="fast"
            bounces={false}
            contentContainerStyle={{
                paddingHorizontal: SPACING,
            }}

            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
            )}

            renderItem={({ item, index }) => {
                const inputRange = [
                    (index - 1) * CARD_WIDTH,
                    index * CARD_WIDTH,
                    (index + 1) * CARD_WIDTH,
                ];

                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.9, 1, 0.9],
                    extrapolate: 'clamp',
                });

                return (
                    <View style={{ width: CARD_WIDTH }}>
                        <Animated.View
                            style={{
                                transform: [{ scale }],
                            }}
                        >
                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={{
                                    width: CARD_WIDTH,
                                    height: CARD_HEIGHT,
                                    borderRadius: 28,
                                    overflow: 'hidden',
                                }}
                                onPress={() => {onNavigate(item)}}
                            >
                                {item.component}
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                );
            }}
        />
    );
}
