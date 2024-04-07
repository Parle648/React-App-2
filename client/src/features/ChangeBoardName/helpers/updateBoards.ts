import store from "../../../app/store/store";
import { setBoards } from "../../../shared/lib/slices/Boards";

export default function updateBoards(boards: [{id: number, name: string}]) {
    store.dispatch(setBoards(boards));
}