import store from "../../../app/store/store";
import { setBoard } from "../../../shared/lib/slices/CurrentBoard";
import { setLists } from "../../../shared/lib/slices/Lists";
import getBoardLists from "../api/getBoardLists";

export default function updateCurrentBoard(board: any) {
    store.dispatch(setBoard(board))
    getBoardLists(board.id)
    .then(data => store.dispatch(setLists(data)))
}