import styles from './SocialIcon.module.css';
import Image from 'next/image';

const SocialIcon = ({iconPath}: SocialIconProps) => {

    return (
        <div className={styles.social}>
            <Image
                src={iconPath}
                alt={'social icon'}
                width={21}
                height={21}
            />
        </div>
    );
};

export default SocialIcon;
