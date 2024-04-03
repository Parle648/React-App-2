import store from "../../../app/store/store";
import { setTasks } from "../../../shared/lib/slices/Tasks";

export default function updateTasks(updatedTask: any) {
    store.dispatch(setTasks(updatedTask))
}