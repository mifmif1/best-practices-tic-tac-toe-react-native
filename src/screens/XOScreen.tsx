import {StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import TileComponent from "@/src/components/XOBoard/Tile";
import xoTurn from "@/src/types/enums/xoTurn";
import {CurrentTurnContext} from "@/src/Contexts/CurrentTurnContext";
import tileState from "@/src/types/enums/tileState";
import Board from "@/src/types/interfaces/board";
import {whoWon} from "@/src/services/api/xoAPI"
import XOBoardComponent from "@/src/components/XOBoard/XOBoard";

const XOScreen = () => {
    return (
        <XOBoardComponent>

        </XOBoardComponent>
    )
};

const styles = StyleSheet.create({
    xoScreen: {}
})

export default XOScreen;
