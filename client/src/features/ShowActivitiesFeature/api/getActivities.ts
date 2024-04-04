export default function getActivities(board_id: number) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch(`http://localhost:3001/activities?board_id=${board_id}`))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
}