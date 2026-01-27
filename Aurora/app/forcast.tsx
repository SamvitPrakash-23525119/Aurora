import { View, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

export default function Forecast() {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity 
                onPress={() => router.push('/')} 
                style={{
                    flex: 1, 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    padding: 100
                }}
            >
                <Text>Go to Weather</Text>
            </TouchableOpacity>
        </View>
    );
}
