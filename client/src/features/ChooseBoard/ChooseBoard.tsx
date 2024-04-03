import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles/chooseBoard.module.scss';
import getBoardsRequest from './api/getBoardsRequest';
import updateBoards from './helpers/updateBoards';
import updateCurrentBoard from './helpers/updateCurrentBoard';

const ChooseBoard = () => {
    const boards = useSelector((state: any) => state.Boards.value);

    useEffect(() => {
        getBoardsRequest()
        .then((response) => updateBoards(response.boards))
    }, [])

    return (
        <div>
            {boards.map((board: any) => {
                return <h2 
                    className={styles.board} 
                    key={board.id} 
                    data-id={board.id} 
                    onClick={() => updateCurrentBoard({id: board.id, name: board.name})} >{board.name}</h2>
            })}
        </div>
    );
};

export default ChooseBoard;