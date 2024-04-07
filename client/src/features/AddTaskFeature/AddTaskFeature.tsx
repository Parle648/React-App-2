import styles from './styles/addCartBtn.module.scss';
import { AddTaskProps } from './types/addTaskProps';
import AddTaskForm from './UI/AddTaskForm/AddTaskForm';
import useToggle from '../../shared/lib/hooks/useToggle';
import Button from '../../shared/UI/Button/Button';

const AddTaskFeature = ({list_id}: AddTaskProps) => {
    const [isVisible, setIsVisible] = useToggle(false);

    return (
        <>
            <Button handleFunction={setIsVisible} style='dashed' width={290}>
                + Add new Task
            </Button>
            <AddTaskForm 
                setIsVisible={setIsVisible}
                visible={isVisible}
                list_id={list_id}>
                <button className={styles.close} onClick={() => setIsVisible()}>X</button>
            </AddTaskForm>
        </>
    );
};

export default AddTaskFeature;