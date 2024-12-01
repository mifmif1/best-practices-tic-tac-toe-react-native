import Board from "@/src/types/interfaces/board";
import tileState from "@/src/types/enums/tileState";

//todo: make it related to the board shape
export const whoWon = (boardStates: Board) => {
        const rows = boardStates.length
        const columns = boardStates[0].length

        //row check:
        for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
            let sameTileSum = 1;
            if (boardStates[rowIndex][0] != tileState.BLANK) {
                for (let columnIndex = 1; columnIndex < columns; columnIndex++) {
                    if (boardStates[rowIndex][columnIndex] === boardStates[rowIndex][columnIndex - 1]) {
                        sameTileSum++;
                    }
                }
                if (sameTileSum === columns) return boardStates[rowIndex][0];
            }
        }

        //column check
        for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
            let sameTileSum = 1;
            if (boardStates[0][columnIndex] != tileState.BLANK) {
                for (let rowIndex = 1; rowIndex < rows; rowIndex++) {
                    if (boardStates[rowIndex][columnIndex] === boardStates[rowIndex - 1][columnIndex]) {
                        sameTileSum++;
                    }
                }
                if (sameTileSum === columns) return boardStates[0][columnIndex];

            }
        }
        if (columns === rows) {
            // diagonals check
            let mainDiagonalSum = 1;
            let secondaryDiagonalSum = 1;
            for (let rowIndex = 1; rowIndex < rows; rowIndex++) {
                for (let columnIndex = 1; columnIndex < columns; columnIndex++) {
                    //main
                    if (boardStates[rowIndex][columnIndex] != tileState.BLANK &&
                        boardStates[rowIndex][columnIndex] === boardStates[rowIndex - 1][columnIndex - 1]) {
                        mainDiagonalSum++;
                    }
                    //secondary
                    if (boardStates[rowIndex][columns - columnIndex - 1] != tileState.BLANK &&
                        boardStates[rowIndex][columns - columnIndex - 1] === boardStates[rowIndex - 1][columns - columnIndex]) {
                        secondaryDiagonalSum++;
                    }

                }
            }
            if (mainDiagonalSum === rows) {
                return boardStates[0][0]
            }
            if (secondaryDiagonalSum === rows) {
                return boardStates[0][columns - 1]
            }
        }
        return null;
    }
;

