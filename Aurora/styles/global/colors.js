const rain = {
    PRIMARY: '#8FAFC6',
    SECONDARY: '#233947',
    ACCENT: '#F6F3EF'
};

const sunny = {
    PRIMARY: '#EB534E',
    SECONDARY: '#EAE4CA',
    ACCENT: '#1B1615'
};

const cloudy = {
    PRIMARY: '#9F5659',
    SECONDARY: '#D4D9D3',
    ACCENT: '#2D3F4B'
};

const lightning = {
    PRIMARY: '#A55B56',
    SECONDARY: '#1B1C1E',
    ACCENT: '#EAE7D7'
};

const snow = {
    PRIMARY: '#FDEAD9',
    SECONDARY: '#8FAFC6',
    ACCENT: '#253A47'
};

const wind = {
    PRIMARY: '#F5E3D7',
    SECONDARY: '#9A5859',
    ACCENT: '#DFD5CE'
};

function colors(key){
    
    switch (key) {
        case 'Rainy':
            return rain;
        case 'Sunny':
            return sunny;
        case 'Cloudy':
            return cloudy;
        case 'Lightning':
            return lightning;
        case 'Snowy':
            return snow;
        case 'Windy':
            return wind;
        default:
            return sunny;
    }
}

export default colors;
