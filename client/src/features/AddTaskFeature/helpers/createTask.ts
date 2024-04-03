import store from "../../../app/store/store"
import { setTasks } from "../../../shared/lib/slices/Tasks"
import createTaskRequest from "../api/postTask"
import { CreteTaskFields } from "../types/taskFormFields"

export default function createTask(data: CreteTaskFields, list_id: number, board_id: number) {
    createTaskRequest(data, list_id, board_id)
    .then((response) => {
        if (response.status === 200) {
            store.dispatch(setTasks(response.tasks))
        } else {
            alert('something went wrong make sure tat your data is correct')
        }
    })
    .catch((error) => alert(error))
}