import { View, Text } from "react-native";
import cssAdapter from "@/styles/components/verticalProgressBar";

type Props = {
    value: number;
    height?: number;
    weatherVariable: string;
};

export default function VerticalProgressBar({ value, height = 120, weatherVariable }: Props) {
    const styles = cssAdapter(weatherVariable);
    const clamped = Math.min(Math.max(value, 0), 100);

    return (
        <View style={styles.COMPONENT_CONTAINER}>
            <Text style={styles.BAR_LABEL}>{clamped}%</Text>

            <View style={[styles.BAR_CONTAINER, { height }]}>
                <View
                    style={[
                        styles.BAR_FILL,
                        { height: `${clamped}%` },
                    ]}
                    />
            </View>
        </View>
    );
}


