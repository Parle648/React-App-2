import styles from './styles/createListFeature.module.scss';
import { useForm } from 'react-hook-form';
import { createListFormFields } from './types/createListFormProps';
import createListRequest from './api/createListRequest';
import { useSelector } from 'react-redux';
import useToggle from '../../shared/lib/hooks/useToggle';
import updateList from './helpers/updateLists';
import Button from '../../shared/UI/Button/Button';
import Input from '../../shared/UI/Input/Input';

const CreateListFeature = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm<createListFormFields>();

    const lists = useSelector((state: any) => state.Lists.value)
    const currentBoard = useSelector((state: any) => state.CurrentBoard.value)

    const [visible, setVisible] = useToggle(false);

    function createList(data: createListFormFields) {
        createListRequest({...data, board_id: currentBoard.id})
        .then((data: any) => updateList(lists, data.id, data.list_name));
        reset();
        setVisible();
    }

    return (
        <div className={styles.block}>
            <Button handleFunction={setVisible}>
                Create List
            </Button>
            <form className={`${styles.createListForm} ${visible && styles.formVisible}`} onSubmit={handleSubmit(createList)} >
               <div className={styles.formInnerContainer}>
                    <button className={styles.closeModal} onClick={() => setVisible()}>X</button>
                    <label className={`${styles.label} ${errors?.list_name && styles.invalidField}`}>
                        <h4 className={styles.listTitle}>Enter name for list</h4>
                        <Input style='create' name='list_name' register={{...register('list_name', {
                            required: "Enter list name",
                            pattern: {
                                value: /^[a-zA-Z0-9\s_-]+$/,
                                message: 'List name should be write using english laguage'
                            }
                        })}} />
                        {errors?.list_name && <span className={styles.errorMessage}>{errors.list_name.message}</span>}
                    </label>
                    <button className={styles.submitBtn} type='submit'>send data</button>
               </div>
            </form>  
        </div>
    );
};

export default CreateListFeature;