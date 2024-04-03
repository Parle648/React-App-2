import styles from './styles/priority.module.scss';

type priorityProps = {
    priority: string,
}

const PriorityBlock = ({priority}: priorityProps) => {
    return (
        <div className={`${styles.priority} ${styles[priority]}`}>
            {priority}
        </div>
    );
};

export default PriorityBlock;