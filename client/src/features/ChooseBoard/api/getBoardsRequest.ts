export default function getBoardsRequest() {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch('http://localhost:3001/boards/'))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
}