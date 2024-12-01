import {Pressable, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";
import TileComponent from "@/src/components/tile/Tile";
import xoTurn from "@/src/types/enums/xoTurn";
import tileState from "@/src/types/enums/tileState";
import Board from "@/src/types/interfaces/board";
import {whoWon} from "@/src/services/api/xoAPI"

const XOBoardComponent = () => {
    const [currentTurn, setCurrentTurn] = useState<xoTurn>(xoTurn.X);
    const [boardStates, setBoardStates] = useState<Board>(Array(3).fill(Array(3).fill(tileState.BLANK)));

    const tileClicked = (row: number, column: number) => {
        if (boardStates[row][column] != tileState.BLANK) {
            alert("already clicked!");
            return;
        }
        const nextBoard: Board = boardStates.map((rowElements, rowIndex) => rowElements.map((tileValue, columnIndex) => {
                if (row === rowIndex && column === columnIndex) {
                    return (currentTurn === xoTurn.O ? tileState.O : tileState.X);
                } else return tileValue;
            })
        )
        setBoardStates(nextBoard);
        setCurrentTurn(() => currentTurn === xoTurn.X ? xoTurn.O : xoTurn.X)
    }

    const resetBoard = (firstTurn: xoTurn) => {
        setBoardStates(() => boardStates.map((tiles, _) => tiles.fill(tileState.BLANK)));
        setCurrentTurn(() => firstTurn);
    }

    useEffect(() => {
            const winner = whoWon(boardStates);
            if (winner === tileState.O) {
                alert('O winner')
            } else if (winner === tileState.X) {
                alert('X winner')
            }

        }
    );

    return (<View style={styles.board}>

        <Pressable
            style={styles.resetButton}
            onPress={() => resetBoard(xoTurn.X)}
        >
            <Text style={styles.resetButtonText}>
                Reset
            </Text>
        </Pressable>

        <Text style={styles.currentTurn}>
            Current Turn: {currentTurn === xoTurn.X ? "X" : "O"}
        </Text>

        <View style={styles.columnContainer}>
            {boardStates.map((rowElements, rowIndex) =>
                <View style={styles.rowContainer} key={`row-${rowIndex}`}>
                    {rowElements.map((tileValue, columnIndex) =>
                        <TileComponent key={`tile-${rowIndex}-${columnIndex}`}
                                       state={tileValue}
                                       tileClicked={() => tileClicked(rowIndex, columnIndex)}/>
                    )}
                </View>
            )}
        </View>

    </View>)
};


const styles = StyleSheet.create({
    board: {
        flex: 1,
    },
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
    resetButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        // backgroundColor: "#d7482c",
        backgroundColor: "#83b524",
    },
    resetButtonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    currentTurn: {
        fontSize: 15,
        lineHeight: 50,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    }
})

export default XOBoardComponent;
