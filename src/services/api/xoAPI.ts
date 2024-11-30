import Board from "@/src/types/interfaces/board";
import tileState from "@/src/types/enums/tileState";

//todo: make it related to the board shape
export const whoWon = (boardStates: Board) => {
    const winOptions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    winOptions.forEach((winOption) => {
            if ((boardStates[winOption[0]] != tileState.BLANK) &&
                boardStates[winOption[0]] === boardStates[winOption[1]] &&
                boardStates[winOption[0]] === boardStates[winOption[2]]
            ) {
                alert(`${boardStates[winOption[0]] === tileState.X ? 'X' : 'O'} WON!!!!`);
                return;
            }
        }
    )
};

