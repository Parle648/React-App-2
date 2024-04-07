import PropTypes from 'prop-types';
import styles from './styles/input.module.scss';

const inputStyles: {[key: string]: any} = {
    create: styles.create,
    disabled: styles.disabled,
}

const Input = ({style, type, name}: {
    style: 'create' | 'disabled', 
    type?: 'date' | undefined, 
    name: string}) => {
    return (
        <input 
            data-testid='input'
            data-name={name}
            className={inputStyles[style] || styles.create} 
            type={type ? type : 'text'} 
            />
    );
};

Input.propTypes = {
    name: PropTypes.string,
    style: PropTypes.string,
    type: PropTypes.oneOf(['date', undefined]),
};

export default Input;