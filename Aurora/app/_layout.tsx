import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'Lato-Light': require('@/assets/fonts/lato.light.ttf'),
        'Lato-Regular': require('@/assets/fonts/lato.regular.ttf'),
        'Lato-Medium': require('@/assets/fonts/lato.medium.ttf')
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'default',
            }}
        >
            <Stack.Screen name="index" 
                options={{
                    headerShown: false,
                    animation: 'slide_from_left',
                }}
            />

            <Stack.Screen name="weather" 
                options={{
                    headerShown: false,
                    animation: 'slide_from_right',
                }}
            />

            <Stack.Screen name="forcast" 
                options={{
                    headerShown: false,
                    animation: 'slide_from_bottom',
                }}
            />
        </Stack>
    );
}
