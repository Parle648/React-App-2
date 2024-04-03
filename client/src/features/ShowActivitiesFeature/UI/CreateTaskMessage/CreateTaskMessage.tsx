import React from 'react';

const CreateTaskMessage = ({to}: {to: string}) => {
    return (
        <h2>
           You Create Task "{to}" 
        </h2>
    );
};

export default CreateTaskMessage;