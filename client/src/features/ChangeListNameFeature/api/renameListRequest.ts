export default function renameListRequest(data: any) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch(`http://localhost:3001/lists/${data.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    listData: {
                        list_name: data.list_name
                    },
                    action: {
                        activity_type: "renameList",
                        from: data.old_name,
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