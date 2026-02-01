import Index from '@/app/index';
import Carousel from '@/components/carousel/Carousel';
import { styles } from '@/styles/pages/location';
import { View } from 'react-native';

export default function Location(){
    const pages = [
        { id: '1', component: <Index weather={'Sunny'} city='Edenvale' country='South Africa' temperature={20}/> },
        { id: '2', component: <Index weather={'Rainy'} city='Pretoria' country='South Africa' temperature={25}/> },
        { id: '3', component: <Index weather={'Cloudy'} city='Johannesburg' country='South Africa' temperature={22}/> },
        { id: '4', component: <Index weather={'Snowy'} city='Cape Town' country='South Africa' temperature={15}/> },
        { id: '5', component: <Index weather={'Windy'} city='Durban' country='South Africa' temperature={28}/> },
        { id: '6', component: <Index weather={'Lightning'} city='East London' country='South Africa' temperature={26}/> }
    ];

    return(
        <View style={styles.PAGE_CONTAINER}>
            <Carousel pages={pages} />
        </View>
    );


}