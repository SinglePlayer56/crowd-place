import {CustomButtonProps} from "@/components/CustomButton/CustomButton.props";
import styles from './CustomButton.module.css';
import cn from 'classnames';
import {memo} from "react";

const CustomButton = memo(
    ({text, color, className, type, children, disabled, onClick}: CustomButtonProps) => {

        return (
            <button onClick={onClick} disabled={disabled} type={type} className={cn(styles.button, className, {
                [styles.white]: color === 'white',
                [styles.blue]: color === 'blue',
                [styles.transparent]: color === 'transparent'
            })}>
                <div className={styles.circle}></div>
                {children ? children : text}
            </button>
        );
    }
)

export default CustomButton;
