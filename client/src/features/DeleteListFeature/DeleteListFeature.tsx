import deleteIcon from '../../shared/assets/img/delete-icon.png';
import styles from './styles/deleteList.module.scss';
import { useSelector } from 'react-redux';
import useToggle from '../../shared/lib/hooks/useToggle';
import deleteList from './helpers/deleteList';
import Button from '../../shared/UI/Button/Button';

const DeleteListFeature = ({list_id, list_name}: {list_id: number, list_name: string}) => {
    const [visible, setVisible] = useToggle(false)
    const lists = useSelector((state: any) => state.Lists.value);

    function deleteListFunction() {
        deleteList(list_id, list_name, lists)
        .then(() => setVisible())
    }

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
                    You really want to delete this list?
                    <Button handleFunction={deleteListFunction} style='delete'>delete</Button>
                </div>
            </div>
        </>
    );
};

export default DeleteListFeature;