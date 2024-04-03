export default function createListRequest(data: any) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch('http://localhost:3001/lists/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    listData: {
                        list_name: data.list_name,
                        board_id: data.board_id
                    },
                    action: {
                        activity_type: "createList",
                        from: "",
                        to: data.list_name,
                        list_name: data.list_name,
                        board_id: data.board_id
                    }
                })
            }))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
}
