import React, { useState, useEffect } from 'react';
import Switch from '../../Switch/Switch';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Mousewheel } from 'swiper';
import TurnOffLights from './TurnOffLights/TurnOffLights'
import Cross from "../../Krest/Cross";
import LampOn from "../../icons/Lamp/LampOn";
import Room from "./Room/Room";
SwiperCore.use([Scrollbar, Mousewheel]);

const Lights = ({ setCategoriesComponent, closeWindow }) => {

    const [roomsArr, setRoomsArr] = useState([
        { id: 1, condition: true },
        { id: 2, condition: false },
        { id: 3, condition: false },
        { id: 4, condition: false },
        { id: 5, condition: true },
    ])

    const [allLights, setAllLights] = useState(false)

    const [activateConfirm, setActivateConfirm] = useState(false);

    const confirmSwitchLights = () => {
        if (allLights) setActivateConfirm(true)
        else switchLights(true)
    }

    const switchLights = (lightCondition) => {
        let newArr = [...roomsArr];
        newArr.map(x => x.condition = lightCondition)
        setRoomsArr(newArr)
        setAllLights(lightCondition)
    }

    const changeCondition = (el) => {
        let newArr = [...roomsArr];
        newArr.map((x) => {
            if (x.id === el.id)
                newArr[x.id - 1].condition = !newArr[x.id - 1].condition;
        })
        setRoomsArr(newArr)
    }

    return (
        <div className="px-39px dark:text-white shadow-xl  dark:bg-add_dark w-453px h-350px rounded-section_item">
            <div className="flex justify-between">
                <p className="text-18px mt-20px mb-20px text-left">Lights</p>
                <button className="" onClick={() => closeWindow('close')}><Cross/></button>
            </div>
            <div className="">
                {
                    roomsArr.map(item =>
                            <Room item={item} setItem={changeCondition}/>
                    )
                }
            </div>
        </div>
    );
};

export default Lights;