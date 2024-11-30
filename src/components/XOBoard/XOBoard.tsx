import {StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import TileComponent from "@/src/components/XOBoard/Tile";
import xoTurn from "@/src/types/enums/xoTurn";
import tileState from "@/src/types/enums/tileState";
import Board from "@/src/types/interfaces/board";
import {whoWon} from "@/src/services/api/xoAPI"

const XOBoardComponent = () => {
    const [currentTurn, setCurrentTurn] = useState<xoTurn>(xoTurn.X);
    const [boardStates, setBoardStates] = useState<Board>(Array(3 * 3).fill(tileState.BLANK));

    const tileClicked = (tileIndex: number) => {
        if (boardStates[tileIndex] != tileState.BLANK) {
            alert("already clicked!");
            return;
        }
        const newArr = [...boardStates];
        newArr[tileIndex] = ((boardStates[tileIndex] === tileState.BLANK) ? (currentTurn === xoTurn.O ? tileState.O : tileState.X) : boardStates[tileIndex]);

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
            console.log('wincheck');
            whoWon(boardStates);
        }
    );

    return (<View style={styles.board}>
        <View style={styles.columnContainer}>
            {[...Array(3).keys()].map((_, rowIndex) =>
                <View key={`Row-${rowIndex}`} style={styles.rowContainer}>
                    {[...Array(3).keys()].map((_, columnIndex) =>
                        <TileComponent
                            key={`Tile-${rowIndex}-${columnIndex}`}
                            tileClicked={() => tileClicked(3 * rowIndex + columnIndex)} // shifting ternary base to decimal!!! this is amazing! genius :)
                            state={boardStates[3 * rowIndex + columnIndex]}
                        />
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
