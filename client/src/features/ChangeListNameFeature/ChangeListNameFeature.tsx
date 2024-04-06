import styles from './styles/changeList.module.scss';
import { useForm } from 'react-hook-form';
import plus from '../../shared/assets/img/plus.png';
import useToggle from '../../shared/lib/hooks/useToggle';
import renameList from './helpers/renameList';
import CurrentBoard from '../../shared/lib/slices/CurrentBoard';
import { useSelector } from 'react-redux';
import Button from '../../shared/UI/Button/Button';

const ChangeListNameFeature = ({id, list_name}: {id: number, list_name: string}) => {
    const [visible, setVisible] = useToggle(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm<{list_name: string}>()

    const currentBoard = useSelector((state: any) => state.CurrentBoard.value)

    function sibmitChanges(data: any) {
        renameList(id, list_name, data.list_name, currentBoard.id)
        reset();
        setVisible();
    }

    return (
        <div>
            <button className={styles.open} onClick={() => setVisible()}><img className={styles.plus} src={plus} alt="plus" /> Edit</button>
            <div className={`${styles.modalBlock} ${visible && styles.visible}`}>
                <form className={styles.form} onSubmit={handleSubmit(sibmitChanges)} >
                    <button className={styles.close} onClick={() => setVisible()}>X</button>
                
                    <h2 className={styles.inputTitle}>Enter new name for list</h2>

                   <label className={styles.label}>
                        <input type="text" {...register('list_name', {
                            required: 'enter new name for list',
                            pattern: {
                                value: /^[a-zA-Z0-9\s_-]+$/,
                                message: 'List name should be write using english laguage'
                            }
                        })} />
                        {errors.list_name && <h4 className={styles.errorMessage}>{errors.list_name.message}</h4>}
                   </label>

                    <Button type='submit' style='modify'>rename</Button>
                </form>
            </div>
        </div>
    );
};

export default ChangeListNameFeature;