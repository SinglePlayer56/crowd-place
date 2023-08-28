import styles from "./ReviewCard.module.css";
import Image from "next/image";
import Link from "next/link";
import {CustomButton} from "@/components";
import {ReviewCardProps} from "./ReviewCard.props";

const ReviewCard = ({title, href, pathImg}: ReviewCardProps) => {

    return (
        <div className={styles.review__item}>
            <div className={styles.review__item_content}>
                <Image
                    src={pathImg}
                    alt={`${title} logo`}
                    width={40}
                    height={40}
                    className={styles.review__item_img}
                />
                <p className={styles.review__item_text}>
                    {title}
                </p>
            </div>
            <Link href={href} >
                <CustomButton
                    text={'Website'}
                    color={'white'}
                    className={styles.review__item_button}
                />
            </Link>
        </div>
    );
};

export default ReviewCard;
