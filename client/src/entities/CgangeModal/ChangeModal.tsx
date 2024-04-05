import styles from './styles/changeModal.module.scss';
import menu from '../../shared/assets/img/menu-vertical.png';
import useToggle from '../../shared/lib/hooks/useToggle';
import { ChangeModalProps } from './types/changeModalProps';

const ChangeModal = ({children}: ChangeModalProps) => {
    const [visible, setVisible] = useToggle(false)

    return (
        <div className={styles.block} >
            <button className={styles.open} onClick={() => setVisible()} >
                <img className={styles.img} src={menu} alt="menu" />
            </button>
            <div className={`${styles.modal} ${visible && styles.modalActive}`}>
                {children}
            </div>
        </div>
    );
};

export default ChangeModal;