import store from "../../../app/store/store";
import { setTasks } from "../../../shared/lib/slices/Tasks";
import deleteTaskRequest from "../api/deleteTaskRequest";

export default function deleteTask(task_id: number, task_name: string) {
    const {Tasks: tasks} = store.getState()
    deleteTaskRequest({task_id, task_name})
    .then(() => store.dispatch(setTasks(tasks.value.filter((item: any) => item.id !== task_id))))
}