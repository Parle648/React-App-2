import { useEffect } from 'react';
import List from '../../entities/List/List';
import { setLists } from '../../shared/lib/slices/Lists';
import getLists from '../../shared/api/getLists';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/taskLists.module.scss';
import getTasks from '../../shared/api/getTasks';
import { setTasks } from '../../shared/lib/slices/Tasks';

const TaskListsWidget = () => {
    const lists = useSelector((state: any) => state.Lists.value)

    const dispatch = useDispatch();
  
    useEffect(() => {
        getLists()
        .then((data: any) => dispatch(setLists(data.sort((a: any, b: any) => a.id - b.id))));
        getTasks()
        .then((data: any) => dispatch(setTasks(data.tasks)))
    }, [])

    return (
        <div className={styles.block}>
            {lists.map((list: any) => <List id={list.id} name={list.list_name} />)}
        </div>
    );
};

export default TaskListsWidget;
