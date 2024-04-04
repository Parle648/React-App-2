export default function MoveTaskMessage({from, to, task_name, time}: {from: string, to: string, task_name: string, time: string}) {
    const parsedDate = new Date(time);

    return (
       <>
            <h2 className="text-start p-15">You move "{task_name}" task from "{from}" list to "{to}" list</h2>
            <p className="flex justify-between mb-4">
                <span>{`${parsedDate.toLocaleDateString()}`}</span>
                <span>{`${parsedDate.toLocaleTimeString()}`}</span>
            </p>
       </>
    )
}