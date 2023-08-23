import Image from "next/image";
import styles from './ArticleImage.module.css';
import {ArticleImageProps} from "./ArticleImage.props";
import cn from 'classnames';

const ArticleImage = ({src, className}: ArticleImageProps) => {

    return (
        <div className={cn(styles.article__image, className)}>
            <Image
                src={src}
                alt={'article-image'}
                width={2000}
                height={2000}
            />
        </div>
    );
};

export default ArticleImage;
