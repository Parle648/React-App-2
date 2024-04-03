import styles from './styles/taskCart.module.scss';
import { TaskCartProps } from './types/taskCartProps';
import ChangeModal from '../CgangeModal/ChangeModal';
import DeleteTaskFeature from '../../features/DeleteTaskFeature/DeleteListFeature';
import ChangeTaskInfo from '../../features/ChangeTaskInfo/ChangeTaskInfo';
import TaskCardPreview from './UI/TaskCardPreview/TaskCardPreview';
import TaskCardFullInform from './UI/TaskCardFullInform/TaskCardFullInform';
import useToggle from '../../shared/lib/hooks/useToggle';
import { TaskContext } from './context/taskContext';

const TaskCart = (taskProperties: TaskCartProps) => {
    const [isVisible, toggleVisible] = useToggle(false);

    return (
        <TaskContext.Provider value={{
            props: taskProperties
        }}>
            <div className={styles.cartWrapper}>
                <div className={styles.cart} onClick={() => toggleVisible()}>
                    <TaskCardPreview />
                </div>
                <div >
                    <ChangeModal>
                        <DeleteTaskFeature />
                        <ChangeTaskInfo />
                    </ChangeModal>
                    <div className={`${styles.modalContainer} ${isVisible && styles.visible}`}>
                        <TaskCardFullInform visible={isVisible}> 
                            <button onClick={() => toggleVisible()}>X</button>
                        </TaskCardFullInform>
                    </div>
                </div>
            </div>
        </TaskContext.Provider>
    );
};

export default TaskCart;