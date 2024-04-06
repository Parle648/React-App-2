import React, { useState } from 'react';
import styles from './styles/activities.module.scss';
import ActivitiesBlock from './UI/ActivitiesBlock/ActivitiesBlock';
import Button from '../../shared/UI/Button/Button';

const ShowActivitiesFeature = () => {
    const [visible, setVisible] = useState<boolean>(false);

    function toggleModal() {
        setVisible(!visible)
    }

    return (
       <>
            <Button handleFunction={toggleModal} width={150}>History</Button>
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