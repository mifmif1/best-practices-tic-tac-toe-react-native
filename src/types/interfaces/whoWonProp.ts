import Board from "@/src/types/interfaces/board";
import xoTurn from "@/src/types/enums/xoTurn";

interface WhoWonProp {
    board: Board,
    lastTurn: xoTurn,
}

export default WhoWonProp;