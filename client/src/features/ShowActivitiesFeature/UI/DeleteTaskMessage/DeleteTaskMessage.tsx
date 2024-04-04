export default function DeleteTaskMessage({task_name, time}: {task_name: string, time: string}) {
    const parsedDate = new Date(time);

    return (
        <>
            <h2 className="text-start p-15">You delete task "{task_name}"</h2>
            <p className="flex justify-between mb-4">
                <span>{`${parsedDate.toLocaleDateString()}`}</span>
                <span>{`${parsedDate.toLocaleTimeString()}`}</span>
            </p>
        </>
    )
}