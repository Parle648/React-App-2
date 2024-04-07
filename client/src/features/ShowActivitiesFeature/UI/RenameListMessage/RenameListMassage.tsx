export default function RenameListMessage({from, to, time}: {from: string, to: string, time: string}) {
    const parsedDate = new Date(time);

    return (
        <>
            <h2 className="text-start p-15 ml-15px">You rename list "{from}" to "{to}"</h2>
            <p className="flex justify-between mb-4 ">
                <span>{`${parsedDate.toLocaleDateString()}`}</span>
                <span>{`${parsedDate.toLocaleTimeString()}`}</span>
            </p>
        </>
    )
}