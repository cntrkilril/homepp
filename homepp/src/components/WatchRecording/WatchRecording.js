import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import Switch from '../Switch/Switch';
import preview from '../../assets/img/png/preview.png'
import 'swiper/swiper-bundle.min.css'

const WatchRecording = () => {

    const [toggle, setToggle] = useState();

    return (
        <div className='shadow-xl bg-add_light rounded-30px dark:text-white shadow-xl dark:bg-add_dark pb-20px'>
            <h6 className='text-18px pt-15px ml-40px'>Watch recording</h6>
            <div className='flex justify-between w-120px mt-5px ml-33px h-40px'>
                <div className="my-auto h-16px"><Switch toggle={toggle} setToggle={setToggle} mainColor='green' /></div>
                <div className='my-auto'>Camera</div>
            </div>
            <div className='flex ml-40px mt-10px'>
                <div>Room: </div>
                <select className='bg-dark_gray rounded-10px ml-4 px-4'>
                    <option>Kitchen</option>
                    <option>Kitchen</option>
                </select>
            </div>
            <div className='swiper-main-height watch-recording'>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                    <SwiperSlide className='mx-auto'><img src={preview} alt="preview" /></SwiperSlide>
                    <SwiperSlide className='mx-auto'><img src={preview} alt="preview" /></SwiperSlide>
                    <SwiperSlide className='mx-auto'><img src={preview} alt="preview" /></SwiperSlide>
                    <SwiperSlide className='mx-auto'><img src={preview} alt="preview" /></SwiperSlide>
                </Swiper>
            </div>
            <div className='flex justify-between w-180px mt-10px ml-33px h-40px'>
                <div className="my-auto h-16px"><Switch toggle={toggle} setToggle={setToggle} mainColor='green' /></div>
                <div className='my-auto'>Motion camera</div>
            </div>
            <div className='flex ml-40px mt-10px'>
                <div>Room: </div>
                <select className='bg-dark_gray rounded-10px ml-4 px-4'>
                    <option>Veranda</option>
                    <option>Veranda</option>
                </select>
            </div>
            <div className='swiper-main-height watch-recording'>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                    <SwiperSlide className='mx-auto'><img src={preview} alt="preview" /></SwiperSlide>
                    <SwiperSlide className='mx-auto'><img src={preview} alt="preview" /></SwiperSlide>
                    <SwiperSlide className='mx-auto'><img src={preview} alt="preview" /></SwiperSlide>
                    <SwiperSlide className='mx-auto'><img src={preview} alt="preview" /></SwiperSlide>
                </Swiper>
            </div>
            <div className='mx-40px flex flex-col justify-between'>
                <h2 className='text-18px'>Detected</h2>
                <div>
                    <div className='flex justify-between bg-dark_gray p-2 rounded-12px'>
                        <span>human</span>
                        <span>2:54:01</span>
                    </div>
                    <div className='flex justify-between bg-white_bg text-black p-2 rounded-12px'>
                        <span>animal</span>
                        <span>2:54:01</span>
                    </div>
                </div>
                <div className="flex justify-end mt-7px">
                    <button className='flex flex-col mx-5px text-light_gray cursor-pointer'>
                        <p className="text-12px mb-3px">All history</p>
                        <div className="border-b-1px border-light_gray w-2/4"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WatchRecording;