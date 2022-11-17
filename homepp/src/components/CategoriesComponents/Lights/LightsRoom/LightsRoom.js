import React, { useState, useEffect } from 'react';
import Switch from '../../../Switch/Switch';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Mousewheel } from 'swiper';
import roomImg from "../../../../assets/img/png/roomImg.png"
import brightness from '../../../../assets/img/png/brightness.png'
import iro from '@jaames/iro';
SwiperCore.use([Scrollbar, Mousewheel]);
const LightsRoom = ({ id }) => {

    const [lampArr, setLampArr] = useState([
        { id: 1, condition: true },
        { id: 2, condition: false },
        { id: 3, condition: false },
        { id: 4, condition: false }]);

    const changeCondition = (el) => {
        let newArr = [...lampArr];
        newArr.map(x => {
            if (x.id === el.id) x.condition = !x.condition;
        })
        setLampArr(newArr)
    }

    const [allLights, setAllLights] = useState(false)

    const changeConditionOfAllLights = () => {
        let newArr = [...lampArr]
        newArr.map(x => x.condition = !allLights);
        setAllLights(!allLights)
        setLampArr(newArr)
    }

    useEffect(() => {zxc()}, [])

    return (
        <div className='w-400px h-650px dark:text-white shadow-xl dark:bg-add_black bg-add_gray rounded-section_item'>
            <div className='flex justify-between mt-6'>
                <div className='flex flex-col ml-10'>
                    <div className='text-4xl'>Room{id}</div>
                    <div className='h-1 w-100 bg-yellow'></div>
                </div>
                <div className='flex mr-16'>
                    <div>off all</div>
                    <div><Switch setToggle={changeConditionOfAllLights} /></div>
                </div>
            </div>
            <div className='flex justify-between mt-12'>
                <div className='ml-5'><div id="picker"></div></div>
                <div>
                    <div className='text-2xl text-left mb-5'>Device</div>
                    <div className='mr-5'>
                        <Swiper
                            style={{ height: "160px", width: "170px" }}
                            slidesPerView={3}
                            mousewheel={true}
                            direction={'vertical'}
                            scrollbar={{ hide: false, clickable: true }}>
                            {lampArr.map((x) =>
                                <SwiperSlide>
                                    <div className='flex'>
                                        <div onClick={() => changeCondition(x)} className={`rounded-circle flex
                                            ${x.condition ? "bg-yellow_50" : "bg-white_50"} w-42px h-42px`}>
                                            <div className={`rounded-circle m-auto flex justify-center
                                                ${x.condition ? "bg-yellow" : "bg-white"} w-33px h-33px`}>
                                                <div className='dark:text-black text-4xl pt-1.5'>{x.id}</div>
                                            </div>
                                        </div>
                                        <div className='my-auto ml-3'>Name_lamp</div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='flex justify-between ml-8'>
                <img src={brightness} />
                <div id="color-colorpicker" className='rounded-all_button h-42px w-42px border-2 border-white mr-28'></div>
            </div>
            <div className='mt-10 w-100 flex justify-center'><img src={roomImg} /></div>
        </div>
    );

};
export default LightsRoom;
function zxc() {
    var colorPicker = new iro.ColorPicker("#picker", {
        width: 200,
        height: 200,
        sliderSize: 2,

    });
    colorPicker.on('color:change', function (color) {
        let block = document.getElementById('color-colorpicker');
        block.style.background = color.hexString;
    });
}