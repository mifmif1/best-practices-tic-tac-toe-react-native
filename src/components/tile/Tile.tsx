import {Image, StyleSheet, TouchableOpacity} from "react-native";
import tileState from "@/src/types/enums/tileState"
import {ImagesAssets} from "@/assets/ImageAssets";
import TileProps from "@/src/types/interfaces/tile";


const TileComponent = (props: TileProps) => {
    return (
        <TouchableOpacity
            onPress={props.tileClicked}
        >
            <Image
                source={props.state === tileState.BLANK ? ImagesAssets.BLANK : (props.state === tileState.X ? ImagesAssets.X : ImagesAssets.O)}
                style={styles.tile}
            />
        </TouchableOpacity>
    )

};


const styles = StyleSheet.create({
    tile: {
        resizeMode: 'contain',
        width: 80, //todo: make it relational to the screen
        height: 50
    },
})

export default TileComponent;
