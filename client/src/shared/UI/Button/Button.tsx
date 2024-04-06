import styles from './styles/button.module.scss';
import { ButtonProps } from './types/ButtonProps';

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
            onClick={() => handleFunction()} >
            {children}
        </button>
    );
};

export default Button;