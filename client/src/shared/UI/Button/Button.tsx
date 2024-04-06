import styles from './styles/button.module.scss';
import { ButtonProps } from './types/ButtonProps';
import PropTypes from 'prop-types';

const btnStyles: {[key: string]: any} = {
    'dashed': styles.dashed, 
    'delete': styles.delete, 
    'create': styles.create, 
    'modify': styles.modify
}

const Button = ({children, width, handleFunction, type, style}: ButtonProps) => {
    return (
        <button 
            className={`${styles.button} ${style && btnStyles[style]}`}
            type={type ? type : 'button'}
            style={{width: `${width}px`}}
            onClick={handleFunction} >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.string, 
    width: PropTypes.number, 
    handleFunction: PropTypes.func, 
    type: PropTypes.oneOf(['submit', undefined]), 
    style: PropTypes.oneOf(['dashed', 'delete', 'create', 'modify'])
}

export default Button;