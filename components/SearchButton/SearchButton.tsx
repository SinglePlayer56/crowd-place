import styles from "./SearchButton.module.css";
import Image from "next/image";
import {SearchButtonProps} from "./SearchButton.props";
import cn from 'classnames';

const SearchButton = ({color, className}: SearchButtonProps) => {

    return (
        <button className={cn(styles.searchButton, className, {
            [styles.white]: color === 'white',
            [styles.blue]: color === 'blue'
        })}>
            <Image
                src={color === 'white' ? '/icons/search-white.svg' : '/icons/search.svg'}
                alt={'search button'}
                width={21}
                height={21}
            />
        </button>
    );
};

export default SearchButton;
