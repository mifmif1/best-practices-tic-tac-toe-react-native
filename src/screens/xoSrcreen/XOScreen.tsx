import XOBoardComponent from "@/src/components/XOBoard/XOBoard";
import styles from "./style"
import {View} from "react-native";

const XOScreen = () => {
    return (
        <View style={styles.xoScreen}>
            <XOBoardComponent/>

        </View>
    )
};

export default XOScreen;
