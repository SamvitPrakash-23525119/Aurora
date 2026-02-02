import cssAdapter from "@/styles/components/verticalProgressBar";
import { Text, View } from "react-native";

type Props = {
    value: number;
    height?: number;
    weatherVariable: string;
    raw?: boolean;
    rawValue?: number;
};

export default function VerticalProgressBar({ value, height = 120, weatherVariable, raw, rawValue }: Props) {
    const styles = cssAdapter(weatherVariable);
    const clamped = Math.min(Math.max(value, 0), 100);

    return (
        <View style={styles.COMPONENT_CONTAINER}>
            {!raw ? <Text style={styles.BAR_LABEL}>{clamped}%</Text> : <Text style={styles.BAR_LABEL}>{rawValue}</Text>}

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


