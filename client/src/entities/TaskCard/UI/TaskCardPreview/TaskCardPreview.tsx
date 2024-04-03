import styles from './styles/taskPreview.module.scss';
import calendar from '../../../../shared/assets/img/calendar.png';
import PriorityBlock from '../PriorityBlock/PriorityBlock';
import { MoveTo } from '../../../../features/MoveTo/MoveTo';
import { useContext } from 'react';
import { TaskContext } from '../../context/taskContext';

const TaskCardPreview = () => {
    const taskContext = useContext(TaskContext);
    const parsedDeadline = new Date(taskContext?.props.deadline).toLocaleDateString();

    return (
        <>
            <h2 className={styles.taskName}>{taskContext?.props.name}</h2>
            <p className={styles.description}>
                {taskContext?.props.description}
            </p>
            <p className={styles.deadline}>
                <img src={calendar} alt="calendar-icon" />
                {parsedDeadline}
            </p>
            <PriorityBlock priority={taskContext?.props.priority} />
            <MoveTo list_name={taskContext?.props.listName} task_id={taskContext?.props.id} task_name={taskContext?.props.name} />
        </>
    );
};

export default TaskCardPreview;