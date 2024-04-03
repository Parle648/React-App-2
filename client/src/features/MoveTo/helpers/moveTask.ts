import store from "../../../app/store/store";
import { setTasks } from "../../../shared/lib/slices/Tasks";

export default function moveTask(tasks: any) {
    return store.dispatch(setTasks(tasks))
}