'use client';
import styles from './BlogCard.module.css';
import {BlogCardProps} from "./BlogCard.props";
import Image from 'next/image';
import {HTag, PTag, Tag, Date} from "@/components";
import Link from "next/link";

const BlogCard = ({title, tag, text, pathImage, date, href}: BlogCardProps) => {

    return (
        <div className={styles.card}>
            <Image
                className={styles.card__image}
                src={pathImage}
                alt={'blog card image'}
                width={511}
                height={215}
            />
            <div className={styles.card__content}>
                <Link className={styles.card__link} href={href}/>
                <HTag className={styles.card__title} tag={'h3'}>
                    {title}
                </HTag>
                <PTag className={styles.card__text} fontSize={'20px'}>
                    {text}
                </PTag>
                <div className={styles.card__footer}>
                    <Tag className={styles.card__tag} href={'blog'} title={tag}/>
                    <Date date={date}/>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
