import React from 'react';
import TaskboardPanel from '../../widgets/TaskboardPanel/TaskboardPanel';
import TaskListsWidget from '../../widgets/TaskListsWidget/TaskListsWidget';

const Main = () => {
    return (
        <>
            <TaskboardPanel />
            <TaskListsWidget />
        </>
    );
};

export default Main;