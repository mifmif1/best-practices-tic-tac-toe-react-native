import {Button, Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {useState} from "react";
import XOBoardComponent from "@/src/components/XOBoard/XOBoard";
import XOScreen from "@/src/screens/XOScreen";


const stars = (arrLength: number) => {
    return [...Array(arrLength).keys()].map(n => <Text
        key={`star_line${n}`}>{' '.repeat(arrLength - n).concat('*'.repeat(n))}</Text>)
}

export default function Index() {
    return (
        <View
            style={styles.index}
        >
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