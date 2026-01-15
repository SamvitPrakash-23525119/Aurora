import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	TITLE_CONTAINER: {
        flex: 1,
        backgroundColor: '#E9E5C7',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    TITLE_TEXT_CONTAINER: {
        alignItems: 'center',
        paddingTop: 100
    },

    TITLE_TEXT: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 25,
    },

    TITLE_ICON: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#EB534E',
        marginTop: 100
    },

    WELCOME_CONTAINER: { 
        alignItems: 'center', 
        paddingBottom: 100, 
        backgroundColor: '#E9E5C7' 
    },

    WELCOME_TEXT: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        lineHeight: 22, 
        width: '100%', 
        textAlign: 'center'
    },

    WELCOME_HINT: { 
        fontSize: 14, 
        lineHeight: 18, 
        textAlign: 'center', 
        paddingHorizontal: 20 
    }

});

export default styles;
