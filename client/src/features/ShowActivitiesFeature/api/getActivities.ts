export default function getActivities() {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch('http://localhost:3001/activities'))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
}