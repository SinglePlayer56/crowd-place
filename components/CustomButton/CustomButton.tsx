import {CustomButtonProps} from "@/components/CustomButton/CustomButton.props";
import styles from './CustomButton.module.css';
import cn from 'classnames';

const CustomButton = ({text, color, className, type, children, disabled}: CustomButtonProps) => {

    return (
        <button disabled={disabled} type={type} className={cn(styles.button, className, {
            [styles.white]: color === 'white',
            [styles.blue]: color === 'blue',
            [styles.transparent]: color === 'transparent'
        })}>
            {children ? children : text}
        </button>
    );
};

export default CustomButton;
