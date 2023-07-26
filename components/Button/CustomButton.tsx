import {CustomButtonProps} from "@/components/Button/CustomButton.props";
import styles from './CustomButton.module.css';
import cn from 'classnames';

const CustomButton = ({text, color}: CustomButtonProps) => {

    return (
        <button className={cn(styles.button, {
            [styles.white]: color === 'white',
            [styles.blue]: color === 'blue'
        })}>
            {text}
        </button>
    );
};

export default CustomButton;
