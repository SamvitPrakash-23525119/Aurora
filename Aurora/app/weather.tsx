import { View, useWindowDimensions, PanResponder, Text } from 'react-native'
import { useRef, useState } from 'react'; 
import { router, useLocalSearchParams } from 'expo-router';
import { TabView, TabBar } from 'react-native-tab-view'; 

import  cssAdapter from '@/styles/pages/weather';
import SideButton from '@/components/side_button/SideButton';
import Forecast from '@/components/weather(Tabs)/Forecast';
import Metrics from '@/components/weather(Tabs)/Metrics';
import DotIndicator from '@/components/dot_indicator/DotIndicator';

export default function Weather() {
    const { weather } = useLocalSearchParams();
    const styles = cssAdapter(weather);
    const weatherStr = Array.isArray(weather) ? weather[0] : (weather ?? '');
    const [index, setIndex] = useState(0);
    const layout = useWindowDimensions();

    const routes =[
        {key: 'today', title: 'The Day Ahead'},
        {key: 'information', title: 'Sky Science'},
    ];

    const renderScene = ({ route } : { route: { key: string } }) => {
        switch (route.key) {
            case 'today':
                return <Forecast weatherStr={weatherStr} />;
            case 'information':
                return <Metrics />;
            default:
                return null;
        }
    };

    const onPanResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gesture) => {
                return Math.abs(gesture.dy) > 15;
            },

            onPanResponderRelease: (_, gesture) => {
                if (gesture.dy > 50) {
                    router.push("/");
                }
            },
        })
    ).current;

    return (
        <View style={styles.PAGE_CONTAINER} {...onPanResponder.panHandlers}>
            <SideButton weatherVariable={weatherStr} page={""} icon={"arrow-right"} top={"6%"} invert={true} right={true}/>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={() => null}
            />
            <DotIndicator
                count={routes.length}
                activeIndex={index}
                onPress={setIndex}
                weatherVariable={weatherStr}
            />
        </View>
    );
}
