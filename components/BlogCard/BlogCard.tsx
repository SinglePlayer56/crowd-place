'use client';
import styles from './BlogCard.module.css';
import {BlogCardProps} from "./BlogCard.props";
import Image from 'next/image';
import {HTag, PTag, Tag, Date} from "@/components";
import Link from "next/link";
import {generateLink} from "@/helpers";
import {useLanguagePage} from "@/hooks/languagePage";

const BlogCard = ({title, tag, text, pathImage, date, href}: BlogCardProps) => {
    const language = useLanguagePage();

    return (
        <div className={styles.card}>
            <div className={styles.card__image}>
                <Image
                    src={pathImage}
                    alt={'blog card image'}
                    width={511}
                    height={215}
                />
            </div>
            <div className={styles.card__content}>
                <Link className={styles.card__link} href={href}/>
                <HTag className={styles.card__title} tag={'h3'}>
                    {title}
                </HTag>
                <PTag className={styles.card__text} fontSize={'20px'}>
                    {text}
                </PTag>
                <div className={styles.card__footer}>
                    <Tag className={styles.card__tag} href={generateLink(`${language}/blog/`, tag)} title={tag}/>
                    <Date date={date}/>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
