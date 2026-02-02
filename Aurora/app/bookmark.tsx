import SearchBar from '@/components/search_bar/SearchBar';
import SideButton from '@/components/side_button/SideButton';
import { GENERAL_ACCENT } from '@/styles/global/colors';
import { styles } from '@/styles/pages/bookmark';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function Bookmark() {
    return (
        <View style={styles.PAGE_CONTAINER}>
            <MaterialIcons name="location-searching" size={65} color={GENERAL_ACCENT} />
            <SearchBar onSearch={(query) => console.log(query)} />
            <SideButton icon={'arrow-left'} page={'location'} weatherVariable={''} top={'5%'} invert={true} />
        </View>
    );
}
