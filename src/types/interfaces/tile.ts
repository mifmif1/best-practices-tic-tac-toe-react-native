import tileState from "@/src/types/enums/tileState";

interface TileProps {
    tileClicked: () => void,
    state: tileState,
}

export default TileProps;