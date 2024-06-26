import React from 'react';
import TaskboardPanel from '../../widgets/TaskboardPanel/TaskboardPanel';
import TaskListsWidget from '../../widgets/TaskListsWidget/TaskListsWidget';
import ChooseBoardWidget from '../../widgets/ChooseBoardWidget/ChooseBoardWidget';
import styles from './styles/main.module.scss';
import { useSelector } from 'react-redux';

const Main = () => {
    const board = useSelector((state: any) => state.CurrentBoard.value)
    return (
        <div className={styles.block}>
            <ChooseBoardWidget />
            {board.length !== 0 && 
            <div className={styles.board}>
                <TaskboardPanel />
                <TaskListsWidget />
            </div>}
        </div>
    );
};

export default Main;