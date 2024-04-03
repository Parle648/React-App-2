export default function getTaskActivities(id: number) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch(`http://localhost:3001/activities/${id}`))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
}