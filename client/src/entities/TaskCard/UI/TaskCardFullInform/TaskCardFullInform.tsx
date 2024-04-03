import styles from './styles/taskFullInfo.module.scss';
import ChangeTaskInfo from '../../../../features/ChangeTaskInfo/ChangeTaskInfo';
import PriorityBlock from '../PriorityBlock/PriorityBlock';
import TaskActivitiesBlock from '../../../../features/TaskActivitiesBlock/TaskActivitiesBlock';
import calendar from '../../../../shared/assets/img/calendar.png';
import { useContext } from 'react';
import { TaskContext } from '../../context/taskContext';

const TaskCardFullInform = ({visible, children}: {visible: boolean, children: any}) => {
    const taskContext = useContext(TaskContext);

    const parsedDeadline = new Date(taskContext?.props.deadline).toLocaleDateString();
    return (
        <div className={styles.modalBlock}>
            <div className={styles.inform}>
                <div className={styles.informActivities}>
                    {children}
                    <ChangeTaskInfo />
                </div>
                <h2>Task name:</h2>
                <h2 className={styles.taskName}>{taskContext?.props.name}</h2>
                <h2>deadline:</h2> 
                <p className={styles.deadline}>
                    <img src={calendar} alt="calendar-icon" />
                    {parsedDeadline}
                </p>
                <h2>priority</h2>
                <PriorityBlock priority={taskContext?.props.priority} />
                <h2>description: </h2>
                <p className={styles.description}>
                    {taskContext?.props.description}
                </p>
            </div>
            {visible && <TaskActivitiesBlock id={taskContext?.props.id} />}
        </div>
    );
};

export default TaskCardFullInform;