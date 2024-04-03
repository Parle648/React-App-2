import { MoveTaskRequestDto } from "../types/moveTaskRequestDto"

export default function moveTaskRequest({task_id, new_list_name, old_list_name, list_id, task_name, board_id}: MoveTaskRequestDto) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch(`http://localhost:3001/tasks/${task_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    taskData: {
                        list_id: +list_id,
                    },
                    action: {
                        activity_type: 'movetask', 
                        from: old_list_name, 
                        to: new_list_name, 
                        task_name: task_name,
                        task_property: '',
                        board_id: board_id
                    }
                })
            }))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
}