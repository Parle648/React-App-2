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
import { useSelector } from 'react-redux';

const ActivitiesBlock = ({children}: {children: any}) => {
    const [activities, setActivities] = useState([]);
    
    const currentBoard = useSelector((state: any) => state.CurrentBoard.value)

    useEffect(() => {
        getActivities(currentBoard.id)
        .then(data => setActivities(data.flat().sort((a: any, b: any) => Date.parse(a.time) - Date.parse(b.time))))
    }, [])

    return (
        <div className={styles.block}>
            <div className={styles.innerBlock}>
                <h2 className={styles.header}>History</h2>
                {children}
                <div className='pl-4 pr-4'>
                    {activities.map(({from, to, activity_type, task_name, list_name, task_property, time}: ActivitiesProps) => {
                        switch (activity_type) {
                            case 'createList':
                                return <CreateListMessage to={to} time={time} />
                            case 'createTask':
                                return <CreateTaskMessage to={to} time={time} />
                            case 'renameList':
                                return <RenameListMessage from={from} to={to} time={time} />
                            case 'movetask':
                                return <MoveTaskMessage task_name={task_name} from={from} to={to} time={time} />
                            case 'changeTask':
                                return <ChangeTaskMessage task_name={task_name} from={from} to={to} property={task_property} time={time} />
                            case 'deleteList':
                                return <DeletelistMessage list_name={list_name} time={time} />
                            case 'deleteTask':
                                return <DeleteTaskMessage task_name={task_name} time={time} />
                            default:
                                break;
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default ActivitiesBlock;