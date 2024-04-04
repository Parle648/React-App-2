import useToggle from '../../shared/lib/hooks/useToggle';
import CreateBoardForm from './UI/CreateBoardForm/CreateBoardForm';
import createBoardRequest from './api/createBoardRequest';
import styles from './styles/createBoard.module.scss';

const CreateBoardFeature = () => {
    const [isVisible, setIsVisible] = useToggle(false);

    return (
        <>
            <button className={styles.open} onClick={setIsVisible} >
                Create Board
            </button>
            {isVisible && <CreateBoardForm setIsVisible={setIsVisible} />}
            
        </>
    );
};

export default CreateBoardFeature;