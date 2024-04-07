import styles from './styles/priority.module.scss';
import PropTypes from 'prop-types';

type priorityProps = {
    priority: 'low' | 'middle' | 'top'
}

const PriorityBlock = ({priority}: priorityProps) => {
    return (
        <div className={`${styles.priority} ${styles[priority]}`}>
            {priority}
        </div>
    );
};

PriorityBlock.propTypes = {
    priority: PropTypes.oneOf(['low', 'middle', 'top'])
};


export default PriorityBlock;