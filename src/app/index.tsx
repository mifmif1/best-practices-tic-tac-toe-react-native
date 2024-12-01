import {StyleSheet, View} from "react-native";
import XOScreen from "@/src/screens/xoSrcreen/XOScreen";


export default function Index() {
    return (
        <View style={styles.index}>
            <XOScreen/>
        </View>

    );
}

const styles = StyleSheet.create({
    index: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})