import { UseFormRegister } from 'react-hook-form';
import { CreteTaskFields } from '../../types/taskFormFields';
import styles from './styles/inputs.module.scss';

export function NameInput ({register, errors}: {register: UseFormRegister<CreteTaskFields>, errors: any}) {
    return (
        <label>
            <h4 className={styles.title}>Add task name</h4>
            <input className={styles.input} type="text" {...register('name', {
                required: 'enter task name',
                pattern: {
                    value: /^[a-zA-Z0-9\s_-]+$/,
                    message: 'List name should be write using english laguage'
                }
            })}/>
            {errors?.name && <h4 className={styles.error}>{errors.name.message}</h4>}
        </label>
    );
};

export function StatusInput ({register, errors}: {register: UseFormRegister<CreteTaskFields>, errors: any}) {
    return (
        <label>
            <h4 className={styles.title}>Add task status</h4>
            <input className={styles.input} type="text" {...register('status', {
                required: 'enter status',
                pattern: {
                    value: /^[a-zA-Z0-9\s_-]+$/,
                    message: 'Status name should be write using english laguage'
                }
            })}/>
            {errors?.status && <h4 className={styles.error}>{errors.status.message}</h4>}
        </label>
    );
};
export function DeadlineInput ({register, errors}: {register: UseFormRegister<CreteTaskFields>, errors: any}) {
    return (
        <label>
            <h4 className={styles.title}>Add task deadline</h4>
            <input className={styles.input} type="date" {...register('deadline', {
                required: 'enter deadline'
            })}/>
            {errors?.deadline && <h4 className={styles.error}>{errors.deadline.message}</h4>}
        </label>
    );
};
export function PriorityInput ({register, errors}: {register: UseFormRegister<CreteTaskFields>, errors: any}) {
    return (
        <label>
            <h4 className={styles.title}>Add task priority</h4>
            <select className={styles.input} {...register('priority', {
                required: 'enter priority',
                pattern: {
                    value: /^(low|middle|top)$/,
                    message: 'Chose from low, middle or top'
                }
            })}>
                <option value="low">low</option>
                <option value="middle">middle</option>
                <option value="top">top</option>
            </select>
            {errors?.priority && <h4 className={styles.error}>{errors.priority.message}</h4>}
        </label>
    );
};
export function DescriptionInput ({register, errors}: {register: UseFormRegister<CreteTaskFields>, errors: any}) {
    return (
        <label>
            <h4 className={styles.title}>Add task description</h4>
            <input className={styles.input} type="textarea" {...register('description', {
                required: 'enter description',
                maxLength: {
                    value: 30,
                    message: 'should be less then 60 characters'
                }
            })}/>
            {errors?.description && <h4 className={styles.error}>{errors.description.message}</h4>}
        </label> 
    );
};