import {CustomButtonProps} from "@/components/CustomButton/CustomButton.props";
import styles from './CustomButton.module.css';
import cn from 'classnames';

const CustomButton = ({text, color, className}: CustomButtonProps) => {

    return (
        <button className={cn(styles.button, className, {
            [styles.white]: color === 'white',
            [styles.blue]: color === 'blue',
            [styles.transparent]: color === 'transparent'
        })}>
            {text}
        </button>
    );
};

export default CustomButton;
