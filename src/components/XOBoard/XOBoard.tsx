import {Button, Pressable, StyleSheet, View, Text} from "react-native";
import {useEffect, useState} from "react";
import TileComponent from "@/src/components/tile/Tile";
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
        const nextBoard: Board = boardStates.map((value, index) => {
            if (index === tileIndex) {
                return (currentTurn === xoTurn.O ? tileState.O : tileState.X);
            } else return value;
        })
        setBoardStates(nextBoard);
        setCurrentTurn(() => currentTurn === xoTurn.X ? xoTurn.O : xoTurn.X)
    }

    const resetBoard = (firstTurn: xoTurn) => {
        setBoardStates(() => boardStates.map(() => tileState.BLANK));
        setCurrentTurn(() => firstTurn);
    }

    useEffect(() => {
            whoWon(boardStates);
        }
    );

    return (<View style={styles.board}>
        <Pressable
            style={styles.resetButton}
            onPress={() => resetBoard(xoTurn.X)}
        >
            <Text
                style={styles.resetButtonText}>Reset</Text>
        </Pressable>
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
    }
})

export default XOBoardComponent;
