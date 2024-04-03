import { useContext } from 'react';
import styles from './styles/listHeader.module.scss';
import { ListContext } from '../../context/listContext';
import ChangeModal from '../../../CgangeModal/ChangeModal';
import DeleteListFeature from '../../../../features/DeleteListFeature/DeleteListFeature';
import ChangeListNameFeature from '../../../../features/ChangeListNameFeature/ChangeListNameFeature';

const ListHeader = () => {
    const listContext = useContext(ListContext);

    return (
        <h2 className={styles.listHeader}>{listContext?.list_name}: {listContext.tasks.reduce((amount: number, task: any) => task.list_id === listContext?.list_id ? amount + 1 : amount + 0, 0)} 
            <ChangeModal>
                <DeleteListFeature list_id={listContext?.list_id} list_name={listContext?.list_name} />
                <ChangeListNameFeature id={listContext?.list_id} list_name={listContext?.list_name} />
            </ChangeModal>
        </h2>
    );
};

export default ListHeader;