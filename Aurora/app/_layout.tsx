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
                animation: "fade",
            }}
        >	
            <Stack.Screen name="index" />
            <Stack.Screen name="weather" />
        </Stack>
    );
}
