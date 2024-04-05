import { useEffect, useState } from 'react';
import styles from './styles/taskActivities.module.scss';
import getTaskActivities from './api/getTaskActivities';
import CreateTaskMessage from '../ShowActivitiesFeature/UI/CreateTaskMessage/CreateTaskMessage';
import MoveTaskMessage from '../ShowActivitiesFeature/UI/MovetaskMessage/MoveTaskMessage';
import ChangeTaskMessage from '../ShowActivitiesFeature/UI/ChangeTaskMessage/ChangeTaskMessage';
import DeleteTaskMessage from '../ShowActivitiesFeature/UI/DeleteTaskMessage/DeleteTaskMessage';
import { useSelector } from 'react-redux';
import { ActivitiesProps } from './types/activitiesProps';

const TaskActivitiesBlock = ({id}: {id: number}) => {
    const [activities, setActivties] = useState([]);
    const tasks = useSelector((state: any) => state.Tasks.value);

    useEffect(() => {
        getTaskActivities(id)
        .then((data) => {
            setActivties(data)
        })
    }, [tasks])

    return (
        <div className={styles.block}>
                <div className={styles.header}>Task history</div>
               <div className='p-4 overflow-auto h-96'>
                   {activities.map(({from, to, activity_type, task_name, task_property, time}: ActivitiesProps) => {
                        switch (activity_type) {
                            case 'createTask':
                                return <CreateTaskMessage to={to} time={time} />
                            case 'movetask': 
                                return <MoveTaskMessage task_name={task_name} from={from} to={to} time={time} />
                            case 'changeTask':
                                return <ChangeTaskMessage task_name={task_name} from={from} to={to} property={task_property} time={time} />
                            case 'deleteTask':
                                return <DeleteTaskMessage task_name={task_name} time={time} />
                            default:
                                break;
                        }
                    })}
               </div>
        </div>
    );
};

export default TaskActivitiesBlock;