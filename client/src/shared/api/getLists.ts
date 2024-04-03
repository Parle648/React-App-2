export default function getLists() {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch('http://localhost:3001/lists'))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
};