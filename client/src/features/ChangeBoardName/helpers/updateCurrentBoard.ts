import store from "../../../app/store/store";
import { setBoard } from "../../../shared/lib/slices/CurrentBoard";

export default function updateCurrentBoard(board: any) {
    store.dispatch(setBoard(board))
}