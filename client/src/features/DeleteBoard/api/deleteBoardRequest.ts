export default function deleteBoardRequest(board_id: number) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch(`http://localhost:3001/boards/${board_id}`, {
                method: 'DELETE',
                headers: {

                },
            }))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
}