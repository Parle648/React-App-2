export default function MoveTaskMessage({from, to, task_name}: {from: string, to: string, task_name: string}) {
    return (
        <h2>You move "{task_name}" task from "{from}" list to "{to}" list</h2>
    )
}