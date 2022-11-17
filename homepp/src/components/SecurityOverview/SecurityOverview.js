import React, {useState} from 'react';
import Switch from "../Switch/Switch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import preview from '../../assets/img/png/preview.png'
import 'swiper/swiper-bundle.min.css'
import Lock from "../../icons/Lock";

const SecurityOverview = () => {

        const [toggle, setToggle] = useState();
        const [lock, setLock] = useState()

        return (
            <div className='shadow-xl bg-add_light rounded-30px dark:text-white dark:bg-add_dark py-20px'>
                <h6 className='text-18px ml-40px'>Security</h6>
                <div className="flex items-center justify-between mx-40px my-17px">
                    <button className="ml-19px" onClick={() => setLock(!lock)}>
                        <Lock status={lock} set={setToggle}/>
                    </button>
                    <p className="text-light_gray">Protection</p>
                    <button>
                        <p className="text-light_gray text-12px">View details</p>
                    </button>
                </div>
                <div className="border-b-1px border-light_gray mx-40px" />
                <div className='flex items-center content-center justify-between w-120px mt-5px ml-33px h-40px'>
                    <Switch toggle={toggle} setToggle={setToggle} mainColor='green' />
                    <p className='my-auto text-light_gray'>Camera</p>
                </div>
                <div className='flex ml-40px mt-10px items-center'>
                    <p className="text-light_gray">Room: </p>
                    <select className='bg-add_gray rounded-10px ml-12px py-3px text-light_gray pl-15px text-16px'>
                        <option className="text-light_gray border-0">Kitchen</option>
                        <option className="text-light_gray border-0">Bedroom</option>
                    </select>
                </div>
                <div className='swiper-main-height watch-recording'>
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        pagination={{ clickable: true }}>
                        <SwiperSlide className='mx-auto'><img className="rounded-20px" src={preview} alt="preview" /></SwiperSlide>
                        <SwiperSlide className='mx-auto'><img className="rounded-20px" src={preview} alt="preview" /></SwiperSlide>
                        <SwiperSlide className='mx-auto'><img className="rounded-20px" src={preview} alt="preview" /></SwiperSlide>
                        <SwiperSlide className='mx-auto'><img className="rounded-20px" src={preview} alt="preview" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className='mx-40px flex flex-col justify-between'>
                    <h2 className='text-18px text-light_gray'>Detected:</h2>
                    <div className="flex flex-col gap-y-4px mt-8px">
                        <div className='flex justify-between bg-add_gray px-13px py-3px rounded-12px'>
                            <span className="text-light_gray text-16px">human</span>
                            <span className="text-light_gray text-16px">2:54:01</span>
                        </div>
                        <div className='flex justify-between bg-add_gray px-13px py-3px rounded-12px'>
                            <span className="text-light_gray text-16px">animal</span>
                            <span className="text-light_gray text-16px">2:54:01</span>
                        </div>
                    </div>
                    <div class="flex justify-end mt-7px">
                        <button className='flex flex-col mx-5px text-light_gray cursor-pointer'>
                            <p className="text-12px mb-3px">All history</p>
                            <div className="border-b-1px border-light_gray w-2/4"/>
                        </button>
                    </div>
                </div>
            </div>
        )
};

export default SecurityOverview;
