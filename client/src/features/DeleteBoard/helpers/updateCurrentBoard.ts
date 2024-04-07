import store from "../../../app/store/store";
import { setBoard } from "../../../shared/lib/slices/CurrentBoard";

export default function updateCurrentBoard() {
    store.dispatch(setBoard([]))
}