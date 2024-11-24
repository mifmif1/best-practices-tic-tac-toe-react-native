import {Image, StyleSheet, TouchableOpacity} from "react-native";
import {useContext, useState} from "react";
import tileState from "@/src/types/enums/tileState"
import {ImagesAssets} from "@/assets/ImageAssets";
import xoTurn from "@/src/types/enums/xoTurn";
import {CurrentTurnContext} from "@/src/Contests/CurrentTurnContext";


const TileComponent = () => {
    const [currentTurn, setCurrentTurn] = useContext<xoTurn>(CurrentTurnContext) ;
    const [state, setState] = useState<tileState>(tileState.BLANK);

    const pressed = () => {
        if (state != tileState.BLANK) {
            alert("already clicked!");
            return;
        }
        setState((state === tileState.BLANK) ? (currentTurn === xoTurn.O ? tileState.O : tileState.X) : state);
        setCurrentTurn(currentTurn === xoTurn.X ? xoTurn.O : xoTurn.X)
        // props.setCurrentTurn((props.currentTurn === xoTurn.X ? xoTurn.O : xoTurn.X));
    }

    return (
        <TouchableOpacity
            onPress={pressed}
        >
            <Image
                source={state === tileState.BLANK ? ImagesAssets.BLANK : (state === tileState.X ? ImagesAssets.X : ImagesAssets.O)}
                style={styles.tile}
            />
        </TouchableOpacity>
    )

};


const styles = StyleSheet.create({
    tile: {
        resizeMode: 'contain',
        width: 80,
        height: 50
    },
})

export default TileComponent;