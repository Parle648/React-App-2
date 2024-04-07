import changeTaskProperties from '../api/changeTaskProps';
import styles from './styles/changePropsForm.module.scss';
import { useForm } from "react-hook-form"
import updateTasks from '../helpers/changeName';
import { useSelector } from 'react-redux';
import Button from '../../../shared/UI/Button/Button';
import Input from '../../../shared/UI/Input/Input';

export function ChangeNameForm({task_id, task_name, old_value}: {task_id: number, task_name: string, old_value: string}) {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<{name: string}>();

    const currentBoard = useSelector((state: any) => state.CurrentBoard.value);

    function updateTaskName(data: {name: string}) {
        changeTaskProperties({
            id: task_id, 
            name: task_name, 
            property_old: old_value, 
            property_new: data.name, 
            property_name: 'name',
            board_id: currentBoard.id
        })
        .then(responseData => updateTasks(responseData.tasks));
    }

    return (
        <form onSubmit={handleSubmit(updateTaskName)}>
            <h2>Enter here new task name</h2>
            <label className={styles.changeInputBlock}>
                <Input style='create' name='name' register={{...register('name', {
                    required: true,
                    pattern: {
                        value: /^[a-zA-Z0-9\s_-]+$/,
                        message: 'List name should be write using english laguage'
                    }
                })}} />
                {errors?.name && <h4 className={styles.error}>{errors.name.message}</h4>}
                <Button width={150} handleFunction={undefined} type='submit' style='modify'>Change name</Button>
            </label>
        </form>
    )
}

export function ChangeDeadlineForm({task_id, task_name, old_value}: {task_id: number, task_name: string, old_value: Date | string}) {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<{deadline: string}>();

    const currentBoard = useSelector((state: any) => state.CurrentBoard.value);

    function updateTaskDeadline(data: {deadline: string}) {
        changeTaskProperties({
            id: task_id, 
            name: task_name, 
            property_old: old_value, 
            property_new: new Date(data.deadline), 
            property_name: 'deadline',
            board_id: currentBoard.id
        })
        .then(responseData => updateTasks(responseData.tasks));
    }

    return (
        <form onSubmit={handleSubmit(updateTaskDeadline)}>
            <h2>Enter here new task deadline</h2>
            <label className={styles.changeInputBlock}>
                <Input type='date' style='create' name='deadline' register={{...register('deadline', {
                    required: true
                })}} />
                <Button width={150} handleFunction={undefined} type='submit' style='modify'>Change date</Button>
            </label>
        </form>
    )
}

export function ChangeDescryptionForm({task_id, task_name, old_value}: {task_id: number, task_name: string, old_value: string}) {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<{descryption: string}>();

    const currentBoard = useSelector((state: any) => state.CurrentBoard.value);

    function updateTaskDescription(data: {descryption: string}) {
        changeTaskProperties({
            id: task_id, 
            name: task_name, 
            property_old: `${old_value}`, 
            property_new: data.descryption, 
            property_name: 'description',
            board_id: currentBoard.id
        })
        .then(responseData => updateTasks(responseData.tasks));
    }

    return (
        <form onSubmit={handleSubmit(updateTaskDescription)}>
            <h2>Enter here new task descryption</h2>
            <label className={styles.changeInputBlock}>
                <Input style='create' name='descryption' register={{...register('descryption', {
                    required: true,
                    pattern: {
                        value: /^[a-zA-Z0-9\s_-]+$/,
                        message: 'description should be write using english laguage'
                    },
                    maxLength: {
                        value: 30,
                        message: 'description should be less than 30 characters'
                    }
                })}} />
                {errors?.descryption && <h4 className={styles.error}>{errors.descryption.message}</h4>}
                <Button width={150} handleFunction={undefined} type='submit' style='modify'>Change descr</Button>
            </label>
        </form>
    )
}

export function ChangePriorityForm({task_id, task_name, old_value}: {task_id: number, task_name: string, old_value: string}) {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<{priority: string}>();

    const currentBoard = useSelector((state: any) => state.CurrentBoard.value);

    function updateTaskPriority(data: {priority: string}) {
        if (data.priority !== old_value) {
            changeTaskProperties({
                id: task_id, 
                name: task_name, 
                property_old: old_value, 
                property_new: data.priority, 
                property_name: 'priority',
                board_id: currentBoard.id
            })
            .then(responseData => updateTasks(responseData.tasks));
        }
    }

    return (
        <form onSubmit={handleSubmit(updateTaskPriority)}>
            <h2>Chose here new priority for task</h2>
            <label className={styles.select}>
                <select {...register('priority', {
                    required: true,
                    pattern: {
                        value: /^(low|middle|top)$/,
                        message: 'List name should be write using english laguage'
                    }
                })} > 
                    <option value="low">low</option>
                    <option value="middle">middle</option>
                    <option value="top">top</option>
                </select>
                <Button width={150} handleFunction={undefined} type='submit' style='modify'>Change priority</Button>
            </label>
        </form>
    )
}