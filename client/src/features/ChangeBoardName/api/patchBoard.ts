export default function patchBoard(name: string, id: number) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch(`http://localhost:3001/boards/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name
                })
            }))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
}