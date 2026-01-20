import { useFonts } from 'expo-fonts';

export const loadFonts = async () => {
    const [fontsLoaded] = useFonts({
        'Lato-Light': require('@/assets/fonts/lato.light.ttf'),
        'Lato-Regular': require('@/assets/fonts/lato.regular.ttf'),
        'Lato-Medium': require('@/assets/fonts/lato.medium.ttf')
    });

    return fontsLoaded;

};


export const fontFamilies = {
    regular: 'Lato-Regular',
    light: 'Lato-Light',
    medium: 'Lato-Medium'
};