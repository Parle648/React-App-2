import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles/chooseBoard.module.scss';
import getBoardsRequest from './api/getBoardsRequest';
import updateBoards from './helpers/updateBoards';
import updateCurrentBoard from './helpers/updateCurrentBoard';
import ChangeModal from '../../entities/CgangeModal/ChangeModal';
import DeleteBoard from '../DeleteBoard/DeleteBoard';
import ChangeBoardName from '../ChangeBoardName/ChangeBoardName';

const ChooseBoard = () => {
    const boards = useSelector((state: any) => state.Boards.value);
    const currentBoard = useSelector((state: any) => state.CurrentBoard.value);

    useEffect(() => {
        getBoardsRequest()
        .then((response) => updateBoards(response.boards))
    }, [])

    return (
        <div>
            {boards.map((board: any) => {
                return <h2 
                    className={`${styles.board} pl-4 ${board.id === currentBoard.id && 'bg-slate-600 p-2 pl-4 text-cyan-50'}`} 
                    key={board.id} 
                    data-id={board.id} 
                    onClick={() => updateCurrentBoard({id: board.id, name: board.name})} >
                        {board.name} 
                        <ChangeModal>
                            <DeleteBoard board_id={board.id} current_board={currentBoard.name} current_board_id={currentBoard.id} />
                            <ChangeBoardName id={board.id} />
                        </ChangeModal> 
                    </h2>
            })}
        </div>
    );
};

export default ChooseBoard;