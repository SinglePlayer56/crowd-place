'use client';

import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './RelatedSwiperPost.css';

import {IPost} from "@/types";
import {BlogCard} from "@/components";
import {Pagination} from "swiper/modules";

const RelatedSwiperPost = ({posts}: {posts: IPost[]}) => {

    const breakpoints = {
        320: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        },
        1400: {
            slidesPerView: 3
        }
    }

    return (
        <Swiper
            className={'slider-container'}
            modules={[Pagination]}
            spaceBetween={25}
            breakpoints={breakpoints}
            pagination={{ clickable: true }}
            onSlideChange={() => {}}
            onSwiper={() => {}}
        >
            {
                posts.length > 0 && posts.map((post: IPost) => (
                    <SwiperSlide key={post.title}>
                        <BlogCard
                            key={post.slugHref}
                            title={post.title}
                            text={post.description}
                            tag={post.category}
                            date={post.date}
                            pathImage={post.imagePath}
                            href={`/blog/${post.slugHref}`}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default RelatedSwiperPost;
