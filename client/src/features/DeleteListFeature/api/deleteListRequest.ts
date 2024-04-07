export default function deleteListRequest({list_id, list_name, board_id}: {list_id: number, list_name: string, board_id: number}) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch(`http://localhost:3001/lists/${list_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    board_id: board_id,
                    list_name: list_name
                })
            }))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
}