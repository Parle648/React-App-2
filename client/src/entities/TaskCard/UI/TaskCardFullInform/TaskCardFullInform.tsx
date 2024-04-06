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
                <h2 className='mb-2 text-slate-950 text-lg'>Task name:</h2>
                <h2 className=' mb-6 text-slate-700'>{taskContext?.props.name}</h2>
                <h2 className='mb-2 text-slate-950 text-lg' >deadline:</h2> 
                <p className='flex items-center mb-6 text-slate-700 '>
                    <img className='mr-4' src={calendar} alt="calendar-icon" />
                    {parsedDeadline}
                </p>
                <h2 className='mb-2 text-slate-950 text-lg'>priority</h2>
                <PriorityBlock priority={taskContext?.props.priority} />
                <h2 className='mb-2 text-slate-950 text-lg'>description: </h2>
                <p className=' text-slate-700'>
                    {taskContext?.props.description}
                </p>
            </div>
            <div>
                {visible && <TaskActivitiesBlock id={taskContext?.props.id} />}
            </div>
        </div>
    );
};

export default TaskCardFullInform;