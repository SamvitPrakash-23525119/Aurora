import { styles } from '@/styles/components/searchResultModal';
import { View } from 'react-native';
import SearchResultContent from './SearchResultContent';

export default function SearchResultModal({ visible } : { visible: boolean }) {
    return (
        <View style={[styles.MODAL_CONTAINER, {display: visible ? 'flex' : 'none'}]}>
            <SearchResultContent country="South Africa" city="Edenvale" postalCode="1609" />
            <SearchResultContent country="South Africa" city="Edenvale" postalCode="1609" />
            <SearchResultContent country="South Africa" city="Edenvale" postalCode="1609" />
            <SearchResultContent country="South Africa" city="Edenvale" postalCode="1609" />
            <SearchResultContent country="South Africa" city="Edenvale" postalCode="1609" />
        </View>
    );
}
