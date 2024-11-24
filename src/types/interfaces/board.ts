import {FixedLengthArray} from "type-fest";
import tileState from "@/src/types/enums/tileState";

interface Board {
    tiles: FixedLengthArray<FixedLengthArray<tileState, 3>, 3>,
}
export default Board;