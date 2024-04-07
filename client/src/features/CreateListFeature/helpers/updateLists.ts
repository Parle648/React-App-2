import store from "../../../app/store/store"
import { setLists } from "../../../shared/lib/slices/Lists"

export default function updateList(lists: any, id: number, list_name: string) {
    store.dispatch(setLists([...lists, {id, list_name}]))
}