import React from 'react';

const CreateTaskMessage = ({to, time}: {to: string, time: string}) => {
    const parsedDate = new Date(time);

    return (
        <>
        <h2 className="text-start p-15">
           You Create Task "{to}" 
        </h2>
        <p className="flex justify-between mb-4">
            <span>{`${parsedDate.toLocaleDateString()}`}</span>
            <span>{`${parsedDate.toLocaleTimeString()}`}</span>
        </p>
    </>
    );
};

export default CreateTaskMessage;