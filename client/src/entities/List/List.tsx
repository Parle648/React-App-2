import styles from './styles/list.module.scss';
import AddTaskFeature from '../../features/AddTaskFeature/AddTaskFeature';
import { useSelector } from 'react-redux';
import { ListPropsType } from './types/lsitPropsType';
import { ListContext } from './context/listContext';
import SpecificTasks from './UI/SpecificTasks/SpecificTasks';
import ListHeader from './UI/ListHeader/ListHeader';

const List = ({id, name}: ListPropsType) => {
    const tasks = useSelector((state: any) => state.Tasks.value)
    
    return (
        <ListContext.Provider value={{
            list_id: id,
            list_name: name,
            tasks: tasks
        }}>
            <div className={styles.block}>
                <ListHeader />
                <AddTaskFeature list_id={id} />
                <SpecificTasks />
            </div>
        </ListContext.Provider>
    );
};

export default List;