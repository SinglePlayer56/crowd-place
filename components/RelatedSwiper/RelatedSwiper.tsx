'use client';

import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './RelatedSwiper.css';

import {IPlatform} from "@/types";
import {PlatformCard} from "@/components";
import {Pagination} from "swiper/modules";

const RelatedSwiper = ({platforms}: {platforms: IPlatform[]}) => {

    const breakpoints = {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        },
        1650: {
            slidesPerView: 4
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
                platforms.length > 0 && platforms.map((platform: IPlatform) => (
                    <SwiperSlide key={platform.name}>
                        <PlatformCard
                            pathLogo={platform.logo}
                            title={platform.name}
                            countries={platform.country}
                            description={platform.description}
                            href={`/platform/${platform.slug}`}
                            type={platform.investmentType}
                            industry={platform.industry}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default RelatedSwiper;
