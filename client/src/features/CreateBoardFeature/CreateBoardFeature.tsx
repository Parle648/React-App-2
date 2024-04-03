import CreateBoardForm from './UI/CreateBoardForm/CreateBoardForm';
import createBoardRequest from './api/createBoardRequest';
import styles from './styles/createBoard.module.scss';

const CreateBoardFeature = () => {
    return (
        <>
            <button className={styles.open}>
                Create Board
            </button>
            <CreateBoardForm />
        </>
    );
};

export default CreateBoardFeature;