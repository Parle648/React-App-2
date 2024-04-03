export default function deleteTaskRequest({task_id, task_name}: {task_id: number, task_name: string}) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch(`http://localhost:3001/tasks/${task_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    task_name: task_name
                })
            }))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
}