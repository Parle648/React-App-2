import { useState } from 'react';
import styles from './styles/addCartBtn.module.scss';
import { AddTaskProps } from './types/addTaskProps';
import AddTaskForm from './UI/AddTaskForm/AddTaskForm';

const AddTaskFeature = ({list_id}: AddTaskProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    
    function toggleModal() {
        setVisible(!visible)
    }

    return (
        <>
            <button className={styles.open} onClick={toggleModal}>
                + Add new Task
            </button>
            <AddTaskForm 
                visible={visible}
                list_id={list_id}>
                <button className={styles.close} onClick={toggleModal}>X</button>
            </AddTaskForm>
        </>
    );
};

export default AddTaskFeature;