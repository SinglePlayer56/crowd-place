'use client';

import {Tag} from "@/components";
import cn from 'classnames';
import styles from './FilterPosts.module.css'
import {FilterPostsProps} from "./FilterPosts.props";
import {categoryPostsTags} from "@/consts";
import {generateLink} from "@/helpers";
import {useLanguagePage} from "@/hooks/languagePage";
import {usePathname} from "next/navigation";

const FilterPosts = ({className}: FilterPostsProps) => {
    const language = useLanguagePage();
    const pathNameArray = usePathname().split('/');
    const currentPageSlug = pathNameArray[pathNameArray.length - 2];

    return (
        <div className={cn(styles.filters, className)}>
            {categoryPostsTags.map((tag) => {
                if (tag === 'All posts') {
                    return (
                        <Tag
                            key={tag}
                            href={`${language}/blog/`}
                            title={tag}
                            className={cn(styles.tag, {
                                [styles.tagNotActive]: currentPageSlug !== 'blog'
                            })}
                        />
                    )
                } else {
                    return (
                        <Tag
                            key={tag}
                            href={generateLink(`${language}/blog/`, tag)}
                            title={tag}
                            className={cn(styles.tag, {
                                [styles.tagNotActive]: currentPageSlug !== tag.toLowerCase().split(' ').join('-')
                            })}
                        />
                    )
                }
            })}
        </div>
    );
};

export default FilterPosts;
