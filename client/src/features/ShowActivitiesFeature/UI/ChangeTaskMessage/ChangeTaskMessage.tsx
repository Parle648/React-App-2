export default function ChangeTaskMessage({from, to, task_name, property}: {from: string, to: string, task_name: string, property: string}) {
    return (
        <h2>You change <b>"{property}"</b> props at <b>"{task_name}"</b> task from <b>"{from}"</b> to <b>"{to}"</b></h2>
    )
}