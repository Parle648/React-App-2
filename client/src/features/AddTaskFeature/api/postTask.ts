// import { createListFormFields } from "../types/createListFormProps";

export default function createTaskRequest(data: any, list_id: number) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch('http://localhost:3001/tasks/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    taskData: {
                        list_id: list_id,
                        ...data, 
                        ['deadline']: new Date(data.deadline)
                    },
                    action: {
                        activity_type: 'createTask', 
                        from: '', 
                        to: data.name, 
                        task_name: data.name,
                        task_property: ''
                    }
                })
            }))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
}
