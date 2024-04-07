import useToggle from '../../shared/lib/hooks/useToggle';
import plus from '../../shared/assets/img/plus.png';
import styles from './styles/changeName.module.scss';
import ChangeBoardForm from './UI/ChangeBoardForm/ChangeBoardForm';

const ChangeBoardName = ({id}: {id: number}) => {
    const [isVisible, setIsVisible] = useToggle(false);
    return (
        <div>
            <button className={styles.open} onClick={() => setIsVisible()}>
                <img className={styles.plus} src={plus} alt="plus" /> Edit
            </button>
            {isVisible && <ChangeBoardForm id={id} setIsVisible={setIsVisible}>
                <button className={styles.close} onClick={() => setIsVisible()}>
                    X
                </button>
            </ChangeBoardForm>}
        </div>
    );
};

export default ChangeBoardName;