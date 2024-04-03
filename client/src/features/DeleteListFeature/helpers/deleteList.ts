import store from "../../../app/store/store";
import { setLists } from "../../../shared/lib/slices/Lists";
import deleteListRequest from "../api/deleteListRequest";

export default function deleteList(list_id: number, list_name: string, lists: any) {
    return deleteListRequest({list_id, list_name})
    .then(() => store.dispatch(setLists(lists.filter((item: any) => item.id !== list_id))))
}