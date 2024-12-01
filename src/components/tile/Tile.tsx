import {Image, TouchableOpacity} from "react-native";
import tileState from "@/src/types/enums/tileState"
import {ImagesAssets} from "@/assets/ImageAssets";
import TileProps from "@/src/types/interfaces/tile";
import styles from "./style"

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


export default TileComponent;
