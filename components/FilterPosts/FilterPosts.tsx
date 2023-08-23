'use client';

import {Tag} from "@/components";
import cn from 'classnames';
import styles from './FilterPosts.module.css'
import {FilterPostsProps} from "./FilterPosts.props";
import {useParams} from "next/navigation";

const FilterPosts = ({className}: FilterPostsProps) => {
    const params = useParams();
    const category = params.category as string;

    const categoryTags = ['All posts', 'P2P Lending', 'Fundraising', 'Property Crowdfunding'];

    return (
        <div className={cn(styles.filters, className)}>
            {categoryTags.map((tag) => {
                const slug = tag.toLowerCase().split(' ').join('-');
                if (category === slug || (category === undefined && tag === 'All posts')) {
                    return (
                        <Tag
                            key={tag}
                            title={tag}
                            className={cn(styles.tag)}
                        />
                    )
                } else {
                    return (
                        <Tag
                            key={tag}
                            title={tag}
                            className={cn(styles.tagNotActive, styles.tag)}
                        />
                    )
                }
            })}
        </div>
    );
};

export default FilterPosts;
