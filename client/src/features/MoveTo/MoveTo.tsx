import { useState } from 'react';
import styles from './styles/moveTo.module.scss';
import arrow from '../../shared/assets/img/drop-down-arrow.png';
import { useSelector } from 'react-redux';
import { MoveToProps } from './types/MoveToProps';
import moveTaskRequest from './api/moveTaskRequest';
import moveTask from './helpers/moveTask';

export const MoveTo = ({ list_name, task_id, task_name }: MoveToProps) => {
    const lists = useSelector((state: any) => state.Lists.value);
    const [visible, setVisible] = useState<boolean>(false);

    function toggleModal(event: any) {
        event.stopPropagation();
        setVisible(!visible);
    }

    function movetask(event: any) {
        event.stopPropagation();
        if (event.target.innerText !== list_name) {
            moveTaskRequest({
                task_id: task_id,
                new_list_name: event.target.innerText,
                old_list_name: list_name,
                list_id: event.target.dataset.id,
                task_name: task_name
            })
            .then((data) => moveTask(data.tasks));
        };
    }

    return (
        <div className={styles.block}>
            <h3 className={styles.toggleChoises} onClick={toggleModal}>
                Move To: <img className={styles.arrow} src={arrow} alt="arrow" />
            </h3>
            <ol className={`${styles.list} ${visible && styles.listVisible}`}>
                {lists.map((list: any) => {
                    return <li
                        className={styles.listTitle}
                        key={list.list_name}
                        data-id={list.id}
                        onClick={movetask}>{list.list_name}</li>;
                })}
            </ol>
        </div>
    );
};
