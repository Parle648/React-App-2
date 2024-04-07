import deleteIcon from '../../shared/assets/img/delete-icon.png';
import styles from './styles/deleteList.module.scss';
import { useContext } from 'react';
import { TaskContext } from '../../entities/TaskCard/context/taskContext';
import deleteTask from './helpers/deleteTask';
import useToggle from '../../shared/lib/hooks/useToggle';
import Button from '../../shared/UI/Button/Button';

const DeleteTaskFeature = () => {
    const taskContext = useContext(TaskContext);
    
    const [visible, setVisible] = useToggle(false)

    return (
        <>
            <button className={styles.block} onClick={() => setVisible()}>
                <img className={styles.basket} src={deleteIcon} alt="delete-icon" /> Delete
            </button>
            <div className={`${styles.modal} ${visible && styles.modalBlock}`}>
                <div className={styles.modalOpen}>
                    <button className={styles.close} onClick={() => setVisible()}>
                        X
                    </button>
                    You really want to delete this task?
                    <Button handleFunction={() => {
                        deleteTask(taskContext?.props.id, taskContext?.props.name);
                        setVisible();
                    }} style='delete'>delete</Button>
                </div>
            </div>
        </>
    );
};

export default DeleteTaskFeature;