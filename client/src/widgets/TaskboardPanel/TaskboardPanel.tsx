import React from 'react';
import styles from './styles/taskboardPanel.module.scss';
import ShowActivitiesFeature from '../../features/ShowActivitiesFeature/ShowActivitiesFeature';
import CreateListFeature from '../../features/CreateListFeature/CreateListFeature';

const TaskboardPanel = () => {
    return (
        <div className={styles.block}>
            <h2 className={styles.ttl}>My taskboard</h2>
            <div className={styles.buttons}>
                <ShowActivitiesFeature />
                <CreateListFeature />
            </div>
        </div>
    );
};

export default TaskboardPanel;