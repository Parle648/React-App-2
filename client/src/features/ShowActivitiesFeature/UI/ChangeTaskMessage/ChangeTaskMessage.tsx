export default function ChangeTaskMessage({from, to, task_name, property, time}: {from: string, to: string, task_name: string, property: string, time: string}) {
    const parsedDate = new Date(time);
    const fromDate = new Date(from)
    const toDate = new Date(to)
    return (
        <>
            <h2 className="text-start p-15">You change <b>"{property}"</b> props at <b>"{task_name}"</b> task from <b>"{fromDate.toLocaleDateString()}"</b> to <b>"{toDate.toLocaleDateString()}"</b></h2>
            <p className="flex justify-between mb-4">
                <span>{`${parsedDate.toLocaleDateString()}`}</span>
                <span>{`${parsedDate.toLocaleTimeString()}`}</span>
            </p>
        </>
    )
}