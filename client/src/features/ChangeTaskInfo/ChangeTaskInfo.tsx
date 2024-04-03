import { useContext } from 'react';
import styles from './styles/changeTaskInfo.module.scss';
import edit from '../../shared/assets/img/edit-icon.png';
import { ChangeDeadlineForm, ChangeDescryptionForm, ChangeNameForm, ChangePriorityForm } from './UI/ChangePropsForms';
import { TaskContext } from '../../entities/TaskCard/context/taskContext';
import useToggle from '../../shared/lib/hooks/useToggle';

const ChangeTaskInfo = () => {
    const [visible, setVisible] = useToggle(false);

    const taskContext = useContext(TaskContext);

    return (
        <>
            <button className={styles.open} onClick={() => setVisible()}>
                <img className={styles.editIcon} src={edit} alt="edit" />
                Edit
            </button>
            <div className={`${styles.modal} ${visible && styles.openedModal}`}>
                <div className={styles.changeForm}>
                    <button className={styles.close} onClick={() => setVisible()}>
                        X
                    </button>
                    <ChangeNameForm task_id={taskContext?.props.id} task_name={taskContext?.props.name} old_value={taskContext?.props.name} />
                    <ChangeDeadlineForm task_id={taskContext?.props.id} task_name={taskContext?.props.name} old_value={taskContext?.props.deadline} />
                    <ChangeDescryptionForm task_id={taskContext?.props.id} task_name={taskContext?.props.name} old_value={taskContext?.props.descryption} />
                    <ChangePriorityForm task_id={taskContext?.props.id} task_name={taskContext?.props.name} old_value={taskContext?.props.priority} />
                </div>
            </div>
        </>
    );
};

export default ChangeTaskInfo;