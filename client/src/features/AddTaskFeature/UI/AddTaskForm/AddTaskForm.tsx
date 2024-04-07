import styles from './styles/addTasksForm.module.scss';
import { useForm } from 'react-hook-form';
import { CreteTaskFields } from '../../types/taskFormFields';
import { TaskFormProps } from '../../types/taskFormProps';
import { DeadlineInput, DescriptionInput, NameInput, PriorityInput, StatusInput } from '../Inputs/Inputs';
import createTask from '../../helpers/createTask';
import { useSelector } from 'react-redux';
import Button from '../../../../shared/UI/Button/Button';

const AddTaskForm = ({visible, children, list_id, setIsVisible}: TaskFormProps) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm<CreteTaskFields>();

    const currentBoard = useSelector((state: any) => state.CurrentBoard.value)

    function sendTaskData(taskDto: CreteTaskFields) {
        createTask(taskDto, list_id, currentBoard.id)
        setIsVisible();
        reset();
    };

    return (
        <div className={`${styles.background} ${visible && styles.visible}`}>
            <form className={styles.form} onSubmit={handleSubmit(sendTaskData)}>
                {children}
                
                <NameInput register={register} errors={errors}/>
                <StatusInput register={register} errors={errors}/>
                <DeadlineInput register={register} errors={errors}/>
                <PriorityInput register={register} errors={errors}/>
                <DescriptionInput register={register} errors={errors}/>
                
                <Button type='submit' data-testid='submit-btn' style='create'>+ Create</Button>
                {/* <button type="submit" data-testid='submit-btn' >+ Create</button> */}
            </form>
        </div>
    );
};

export default AddTaskForm;