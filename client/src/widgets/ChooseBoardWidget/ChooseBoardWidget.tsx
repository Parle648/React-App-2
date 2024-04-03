import useToggle from '../../shared/lib/hooks/useToggle';
import styles from './styles/chooseBoard.module.scss';

const ChooseBoardWidget = () => {
    const [opened, toggleOpened] = useToggle(true);
    return (
        <div className={`${styles.block} ${!opened && styles.closedBlock}`}>
            <button className={styles.toggleOpenedBtn} onClick={() => toggleOpened()}>{opened ? `\<` : `\>`}</button>
            <h2 className={styles.title}>My boards</h2>
        </div>
    );
};

export default ChooseBoardWidget;