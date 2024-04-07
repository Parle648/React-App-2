const CreateListMessage = ({to, time}: {to: string, time: string}) => {
    const parsedDate = new Date(time);

    return (
        <>
            <h2 className="text-start p-15">
               You Create List "{to}" 
            </h2>
            <div className="w-400px flex justify-between mb-4">
                <span>{`${parsedDate.toLocaleDateString()}`}</span>
                <span>{`${parsedDate.toLocaleTimeString()}`}</span>
            </div>
        </>
    );
};

export default CreateListMessage;