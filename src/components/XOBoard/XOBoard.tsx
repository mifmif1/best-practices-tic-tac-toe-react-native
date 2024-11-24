import {StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import TileComponent from "@/src/components/XOBoard/Tile";
import xoTurn from "@/src/types/enums/xoTurn";
import {CurrentTurnContext} from "@/src/Contexts/CurrentTurnContext";
import tileState from "@/src/types/enums/tileState";


const XOBoardComponent = () => {
    const [currentTurn, setCurrentTurn] = useState<xoTurn>(xoTurn.X);
    // const [isReset, setIsReset] = useState<boolean>(false);
    useEffect(() => {
        // whoWon()
    });

    return (<View style={styles.board}>
        <View style={styles.columnContainer}>
            {[...Array(3).keys()].map((_, columnIndex) =>
                <View key={`Col-${columnIndex}`} style={styles.rowContainer}>
                    {[...Array(3).keys()].map((_, rowIndex) =>
                        <CurrentTurnContext.Provider value={[currentTurn, setCurrentTurn]}>
                            <TileComponent
                                key={`Tile-${rowIndex}-${columnIndex}`}
                                row={rowIndex}
                                column={columnIndex}
                                state={tileState.BLANK}
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
