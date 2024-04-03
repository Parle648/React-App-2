import store from "../../../app/store/store";
import { setLists } from "../../../shared/lib/slices/Lists";
import renameListRequest from "../api/renameListRequest";

export default function renameList(id: number, old_name: string, list_name: string) {
    renameListRequest({id: id, old_name: old_name, list_name: list_name})
    .then((response) => {
        if (response.status === 200) {
            store.dispatch(setLists(response.lists.sort((a: any, b: any) => a.id - b.id)))
        } else {
            alert('something went wrong')
        }
    })
    .catch((error) => alert(error))
}