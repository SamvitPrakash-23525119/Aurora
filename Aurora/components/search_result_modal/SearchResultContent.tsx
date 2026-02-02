import { styles } from '@/styles/components/searchResultContent';
import { GENERAL_ACCENT } from '@/styles/global/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export default function SearchResultContent({ country, city, postalCode } : { country: string, city: string, postalCode: string }){
    return(
        <View style={styles.CARD_CONTAINER}>
            <MaterialIcons name="location-on" size={25} color={GENERAL_ACCENT} style={{marginTop: '4%'}} />
            <View style={styles.TEXT_CONTAINER}>
                <Text style={ styles.MAIN_TEXT }>{city}</Text>
                <Text style={ styles.SUB_TEXT }>{`${country}, ${postalCode}`}</Text>
                <View style={ styles.DIVIDER }></View>
            </View>
        </View>
    );
}