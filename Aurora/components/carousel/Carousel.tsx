import colors from '@/styles/global/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const CARD_WIDTH = width * 0.88;
const CARD_HEIGHT = height * 0.75;
const SPACING = (width - CARD_WIDTH) / 2;

export default function Carousel({ pages }: { pages: any }) {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [remove, setRemove] = useState(false);

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

    const onRemove = (item: any) => {
        console.log("Remove item:", item.city);
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
                    <View 
                        style={{ width: CARD_WIDTH }}
                        onTouchStart={() => {remove && setRemove(false)}}
                    >
                        <Animated.View
                            style={{
                                transform: [{ scale }],
                            }}
                        >
                            {item.city && <TouchableOpacity 
                                onPress={() => onRemove(item)}
                                style={{
                                    display: remove ? 'flex' : 'none',
                                    position: 'absolute',
                                    borderColor: colors(item.weather).ACCENT,
                                    borderRadius: 28,
                                    borderWidth: 1,
                                    zIndex: 1,
                                    right: 16,
                                    top: 16,
                                }}
                            >
                                <MaterialIcons name="close" size={30} color={colors(item.weather).ACCENT} />
                            </TouchableOpacity>}

                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={{
                                    width: CARD_WIDTH,
                                    height: CARD_HEIGHT,
                                    borderRadius: 28,
                                    overflow: 'hidden',
                                }}
                                onPress={() => {onNavigate(item)}}
                                onLongPress={() => setRemove(!remove)}
                                delayLongPress={400}
                                disabled={item.city ? remove : false}
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
