import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {ImagesAssets} from "@/assets/ImageAssets";

const XOBoardComponent = () => {

    return (<View style={styles.board}>

        <View style={styles.columnContainer}>
            {[...Array(3).keys()].map(() => <View style={styles.rowContainer}>
                {[...Array(3).keys()].map(() => <TouchableOpacity>
                        <Image
                            source={ImagesAssets.o}
                            style={styles.tile}
                        />
                    </TouchableOpacity>
                )}
            </View>)}
        </View>)
    </View>);
};

const styles = StyleSheet.create({
    board: {
        backgroundColor: '#0aa0FF'
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
    tile: {
        resizeMode: 'contain',
        width: '50',
        height: '50'
    },
})


export default XOBoardComponent;
