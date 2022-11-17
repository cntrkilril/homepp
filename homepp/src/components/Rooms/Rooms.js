import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import RoomsItem from './RoomsItem/RoomsItem';
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Pagination])

const Rooms = () => {

    return (
        <div className="rooms shadow-xl grid bg-add_light h-335px rounded-section_item dark:text-white shadow-xl dark:bg-add_dark">
            <div className="flex justify-between mt-2.5">
                <div className="ml-11 mt-4">
                    <span className="text-4xl">Rooms</span>
                </div>
            </div>
            <div className='swiper-main-height'>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                    <SwiperSlide><RoomsItem currentRooms={[1, 2, 3, 4, 5, 6]} /></SwiperSlide>
                    <SwiperSlide><RoomsItem currentRooms={[7, 8, 9, 10, 11, 12]} /></SwiperSlide>
                    <SwiperSlide><RoomsItem currentRooms={[13, 14, 15, 16, 17, 'add']} /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Rooms;