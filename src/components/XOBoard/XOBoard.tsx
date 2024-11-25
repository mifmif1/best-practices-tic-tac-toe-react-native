import {StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import TileComponent from "@/src/components/XOBoard/Tile";
import xoTurn from "@/src/types/enums/xoTurn";
import {CurrentTurnContext} from "@/src/Contexts/CurrentTurnContext";
import tileState from "@/src/types/enums/tileState";
import Board from "@/src/types/interfaces/board";


const XOBoardComponent = () => {
    const [currentTurn, setCurrentTurn] = useState<xoTurn>(xoTurn.X);
    const [boardStates, setBoardStates] = useState<Board>(Array(3 * 3).fill(tileState.BLANK));

    const tileClicked = (tileIndex: number) => {
        if (boardStates[tileIndex] != tileState.BLANK) {
            alert("already clicked!");
            return;
        }
        const newArr = [...boardStates];
        newArr[tileIndex] = ((boardStates[tileIndex] === tileState.BLANK) ? (currentTurn === xoTurn.O ? tileState.O : tileState.X) : boardStates[row][column]);

        setBoardStates(newArr);
        // setBoardStates((prev)=> ({...prev, prev[row][column]: tileState.X }));
        // boardStates[row][column]: ((boardStates[row][column] === tileState.BLANK) ? (currentTurn === xoTurn.O ? tileState.O : tileState.X) : boardStates[row][column])}))

        setCurrentTurn(() => currentTurn === xoTurn.X ? xoTurn.O : xoTurn.X)
    }

    const resetBoard = (firstTurn: xoTurn) => {
        setBoardStates(() => boardStates.map(() => tileState.BLANK));
        setCurrentTurn(() => firstTurn);
    }

    useEffect(() => {
            console.log('wincheck')
            const winOptions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0,4,8], [2,4,6]];
            winOptions.forEach((winOption) => {
                    if ((boardStates[winOption[0]] === tileState.X || boardStates[winOption[0]] === tileState.O) &&
                    boardStates[winOption[0]] === boardStates[winOption[1]] &&
                    boardStates[winOption[0]] === boardStates[winOption[2]]
                )
                    {
                        alert(`${boardStates[winOption[0]] === tileState.X ? 'X' : 'O'} WON!!!!`);
                        return;
                    }
                }
            )
        }
    );

    return (<View style={styles.board}>
        <View style={styles.columnContainer}>
            {[...Array(3).keys()].map((_, rowIndex) =>
                <View key={`Row-${rowIndex}`} style={styles.rowContainer}>
                    {[...Array(3).keys()].map((_, columnIndex) =>
                        <CurrentTurnContext.Provider value={[currentTurn, setCurrentTurn]}>
                            <TileComponent
                                key={`Tile-${rowIndex}-${columnIndex}`}
                                tileClicked={() => tileClicked(3 * rowIndex + columnIndex)} // shifting ternary base to decimal!!! this is amazing! genius :)
                                state={boardStates[3 * rowIndex + columnIndex]}
                            />
                        </CurrentTurnContext.Provider>
                    )}
                </View>)}
        </View>)
    </View>);
};

const styles = StyleSheet.create({
    board: {},
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    columnContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default XOBoardComponent;
