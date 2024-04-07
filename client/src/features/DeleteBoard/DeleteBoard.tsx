import Button from '../../shared/UI/Button/Button';
import deleteIcon from '../../shared/assets/img/delete-icon.png';
import deleteBoardRequest from './api/deleteBoardRequest';
import updateBoards from './helpers/updateBoards';
import updateCurrentBoard from './helpers/updateCurrentBoard';
import styles from './styles/deleteBoard.module.scss';

const DeleteBoard = ({current_board, board_id, current_board_id}: {current_board: string | undefined, board_id: number, current_board_id: number}) => {
    function deleteBoard(event: any) {
        event.stopPropagation();
        deleteBoardRequest(board_id)
        .then((data: any) => {
            if (data.status === 200) {
                updateBoards(data.boards);
                if (current_board_id === board_id) {
                    updateCurrentBoard()
                }
            } else {
                alert('something went wrong')
            }
        })
    }

    return (
        <div className={styles.block} onClick={deleteBoard}>
            <img className={styles.basket} src={deleteIcon} alt='busket' />
            Delete
        </div>
    );
};

export default DeleteBoard;