import PropTypes from 'prop-types';
import styles from './styles/input.module.scss';

const inputStyles: {[key: string]: any} = {
    create: styles.create,
    disabled: styles.disabled,
}

const Input = ({style, type, name, register}: {
    style: 'create' | 'disabled', 
    type?: 'date' | undefined, 
    register?: any,
    name: string}) => {
    return (
        <input 
            data-testid='input'
            data-name={name}
            className={inputStyles[style] || styles.create} 
            {...!!register && register}
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