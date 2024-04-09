"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card } from '../Card/Card';
import Link from "next/link"

export const SwipperClient = ({ data }) => {
    return (
        <div className='text-white'>
            <Swiper
                spaceBetween={32}
                slidesPerView={3.5}
            >
                {data?.data?.map(x => (
                    <SwiperSlide key={x.movie_id} className='text-white'>
                        <Link href={`/movie-details/${x.movie_id}`}>
                            <Card title={x.movie_title} image={x?.image ?? `/firstimage.jpg`} description={x.description} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}