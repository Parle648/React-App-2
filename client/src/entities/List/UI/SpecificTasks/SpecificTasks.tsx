import { useContext } from 'react';
import TaskCard from '../../../TaskCard/TaskCard';
import { ListContext } from '../../context/listContext';
import { useSelector } from 'react-redux';

const SpecificTasks = () => {
    const tasks = useSelector((state: any) => state.Tasks.value)
    const listContext = useContext(ListContext);

    return (
        <div className="">
            {!!tasks && tasks.map((task: any) => {
                if (task.list_id === listContext?.list_id) {
                    return <TaskCard 
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        description={task.description}
                        deadline={task.deadline}
                        priority={task.priority}
                        listName={listContext?.list_name} />
                }
            })}
        </div>
    );
};

export default SpecificTasks;