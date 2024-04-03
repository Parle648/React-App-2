export default function createBoardRequest(boardDto: any) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch('http://localhost:3001/boards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(boardDto)
            }));
        } catch (error) {
            reject(error);
        }
    })
    .then((response: any) => response.json())
    .catch((error) => alert(error))
}