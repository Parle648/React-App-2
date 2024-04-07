export default function changeTaskProperties({id, name, property_name, property_old, property_new, board_id}: {
    id: number,
    name: string
    property_name: string,
    property_old: string | Date,
    property_new: string | Date,
    board_id: number
}) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch(`http://localhost:3001/tasks/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    taskData: {
                        [property_name]: property_new
                    },
                    action: {
                        activity_type: 'changeTask', 
                        from: property_old, 
                        to: property_new, 
                        task_name: name,
                        task_property: property_name,
                        board_id: board_id
                    }
                })
            }))
        } catch (error) {
            reject(error);
        };
    })
    .then((response: any) => response.json());
};