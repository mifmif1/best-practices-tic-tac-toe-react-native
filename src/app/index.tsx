import {Button, Image, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import XOBoardComponent from "@/src/components/XOBoard/XOBoard";


const stars = (arrLength: number) => {
    return [...Array(arrLength).keys()].map(n => <Text
        key={`star_line${n}`}>{' '.repeat(arrLength - n).concat('*'.repeat(n))}</Text>)
}

export default function Index() {
    const [starLines, setStarLines] = useState(8);
    // const [color, setColor] = useState('#123456')
    const increaseStars = () => setStarLines(starfLines => starfLines + 1)
    const decreaseStars = () => setStarLines(starLines => starLines - 1)
    // const increaseColor = ()
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Hello world!</Text>
            <Button
                onPress={() => increaseStars()}
                title="increase stars"
                color="#123456"
                accessibilityLabel={"asdfasfasdf"}
            />
            <Button
                onPress={() => decreaseStars()}
                title="decrease stars"
                color="#654321"
            />
            <View>
                {stars(starLines)}
            </View>
            <XOBoardComponent/>
        </View>

    );
}