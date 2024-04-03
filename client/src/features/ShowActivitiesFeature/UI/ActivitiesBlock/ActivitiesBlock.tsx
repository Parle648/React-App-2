import { useEffect, useState } from 'react';
import styles from './styles/activitiesBlock.module.scss';
import getActivities from '../../api/getActivities';
import CreateListMessage from '../CreateListMessage/CreateListMessage';
import CreateTaskMessage from '../CreateTaskMessage/CreateTaskMessage';
import RenameListMessage from '../RenameListMessage/RenameListMassage';
import MoveTaskMessage from '../MovetaskMessage/MoveTaskMessage';
import ChangeTaskMessage from '../ChangeTaskMessage/ChangeTaskMessage';
import DeletelistMessage from '../DeleteListMessage/DeleteListMessage';
import DeleteTaskMessage from '../DeleteTaskMessage/DeleteTaskMessage';
import { ActivitiesProps } from '../../types/activitiesProps';

const ActivitiesBlock = ({children}: {children: any}) => {
    const [activities, setActivities] = useState([]);
    
    useEffect(() => {
        getActivities()
        .then(data => setActivities(data.flat().sort((a: any, b: any) => Date.parse(a.time) - Date.parse(b.time))))
    }, [])

    return (
        <div className={styles.block}>
            <div className={styles.innerBlock}>
                <div className={styles.header}>History</div>
                {children}
                {activities.map(({from, to, activity_type, task_name, list_name, task_property}: ActivitiesProps) => {
                    switch (activity_type) {
                        case 'createList':
                            return <CreateListMessage to={to} />
                        case 'createTask':
                            return <CreateTaskMessage to={to} />
                        case 'renameList':
                            return <RenameListMessage from={from} to={to} />
                        case 'movetask':
                            return <MoveTaskMessage task_name={task_name} from={from} to={to} />
                        case 'changeTask':
                            return <ChangeTaskMessage task_name={task_name} from={from} to={to} property={task_property} />
                        case 'deleteList':
                            return <DeletelistMessage list_name={list_name} />
                        case 'deleteTask':
                            return <DeleteTaskMessage task_name={task_name} />
                        default:
                            break;
                    }
                })}
            </div>
        </div>
    );
};

export default ActivitiesBlock;