import React, { useState } from 'react';
import styles from './styles/activities.module.scss';
import ActivitiesBlock from './UI/ActivitiesBlock/ActivitiesBlock';

const ShowActivitiesFeature = () => {
    const [visible, setVisible] = useState<boolean>(false);

    function toggleModal() {
        setVisible(!visible)
    }

    return (
       <>
            <button className={styles.open} onClick={toggleModal}>
                History
            </button>
            {visible && 
                <ActivitiesBlock> 
                <button className={styles.close} onClick={toggleModal}>
                    X
                </button>
                </ActivitiesBlock>
            }
       </>
    );
};

export default ShowActivitiesFeature;