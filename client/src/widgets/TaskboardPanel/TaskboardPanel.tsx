import styles from './styles/taskboardPanel.module.scss';
import ShowActivitiesFeature from '../../features/ShowActivitiesFeature/ShowActivitiesFeature';
import CreateListFeature from '../../features/CreateListFeature/CreateListFeature';
import { useSelector } from 'react-redux';

const TaskboardPanel = () => {
    const currentBoard = useSelector((state: any) => state.CurrentBoard.value);
    return (
        <div className={styles.block}>
            <h2 className={styles.ttl}>{currentBoard?.name}</h2>
            <div className={styles.buttons}>
                <ShowActivitiesFeature />
                <CreateListFeature />
            </div>
        </div>
    );
};

export default TaskboardPanel;