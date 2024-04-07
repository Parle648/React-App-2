import store from "../../../app/store/store";
import { setBoards } from "../../../shared/lib/slices/Boards";

export default function updateBoards(boards: any) {
    store.dispatch(setBoards(boards))
}