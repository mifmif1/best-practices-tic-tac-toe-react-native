import tileState from "@/src/types/enums/tileState";

interface TileProps {
    row: number,
    column: number,
    state: tileState,
}

export default TileProps;