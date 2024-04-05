import styles from './styles/addTasksForm.module.scss';
import { useForm } from 'react-hook-form';
import { CreteTaskFields } from '../../types/taskFormFields';
import { TaskFormProps } from '../../types/taskFormProps';
import { DeadlineInput, DescriptionInput, NameInput, PriorityInput, StatusInput } from '../Inputs/Inputs';
import createTask from '../../helpers/createTask';
import { useSelector } from 'react-redux';

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
        createTask(taskDto, list_id, currentBoard.id);
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
                <button type="submit">+ Create</button>
            </form>
        </div>
    );
};

export default AddTaskForm;