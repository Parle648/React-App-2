export default function getTasks() {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch('http://localhost:3001/tasks'))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
};