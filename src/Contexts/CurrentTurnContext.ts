import {createContext} from "react";
import xoTurn from "@/src/types/enums/xoTurn";

export const CurrentTurnContext = createContext<[xoTurn, React.Dispatch<React.SetStateAction<xoTurn>>]>([xoTurn.X, () => xoTurn.X]);