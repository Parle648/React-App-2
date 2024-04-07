import { useEffect } from 'react';
import List from '../../entities/List/List';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/taskLists.module.scss';
import getTasks from '../../shared/api/getTasks';
import { setTasks } from '../../shared/lib/slices/Tasks';

const TaskListsWidget = () => {
    const lists = useSelector((state: any) => state.Lists.value)

    const dispatch = useDispatch();
  
    useEffect(() => {
        getTasks()
        .then((data: any) => dispatch(setTasks(data.tasks)))
    }, [])

    return (
        <div className={styles.block}>
            {lists.map((list: any) => <List key={list.id} id={list.id} name={list.list_name} />)}
        </div>
    );
};

export default TaskListsWidget;
