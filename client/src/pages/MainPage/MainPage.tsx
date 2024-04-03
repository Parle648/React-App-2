import React from 'react';
import TaskboardPanel from '../../widgets/TaskboardPanel/TaskboardPanel';
import TaskListsWidget from '../../widgets/TaskListsWidget/TaskListsWidget';
import ChooseBoardWidget from '../../widgets/ChooseBoardWidget/ChooseBoardWidget';
import styles from './styles/main.module.scss';

const Main = () => {
    return (
        <div className={styles.block}>
            <ChooseBoardWidget />
            <div className={styles.board}>
                <TaskboardPanel />
                <TaskListsWidget />
            </div>
        </div>
    );
};

export default Main;