export default function DeletelistMessage({list_name, time}: {list_name: string, time: string}) {
    const parsedDate = new Date(time);

    return (
        <>
            <h2 className="text-start p-15">You delete list "{list_name}"</h2>
            <p className="flex justify-between mb-4">
                <span>{`${parsedDate.toLocaleDateString()}`}</span>
                <span>{`${parsedDate.toLocaleTimeString()}`}</span>
            </p>
        </>
    )
}