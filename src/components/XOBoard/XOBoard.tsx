import {StyleSheet, View} from "react-native";
import {useState} from "react";
import TileComponent from "@/src/components/XOBoard/Tile";
import xoTurn from "@/src/types/enums/xoTurn";
import {CurrentTurnContext} from "@/src/Contexts/CurrentTurnContext";


const XOBoardComponent = () => {
    const [currentTurn, setCurrentTurn] = useState<xoTurn>(xoTurn.X);
    // const [isReset, setIsReset] = useState<boolean>(false);

    return (<View style={styles.board}>
        <View style={styles.columnContainer}>
            {[...Array(3).keys()].map((_, columnIndex) =>
                <View key={`Col-${columnIndex}`} style={styles.rowContainer}>
                    {[...Array(3).keys()].map((_, rowIndex) =>
                        <CurrentTurnContext.Provider value={[currentTurn, setCurrentTurn]}>
                            <TileComponent
                                key={`Tile-${rowIndex}-${columnIndex}`}
                            />
                        </CurrentTurnContext.Provider>
                    )}
                </View>)}
        </View>)
    </View>);
};

const styles = StyleSheet.create({
    board: {
        // backgroundColor: '#0aa0FF'
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
})

export default XOBoardComponent;
