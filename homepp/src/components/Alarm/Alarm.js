import React, { useState } from 'react';
import Switch from "../Switch/Switch";

const Alarm = () => {

    const items = [1, 2, 3, 4, 5, 6, , 7, 8, 9]

    const [nightMode, setNightMode] = useState(false)
    const [leavingHome, setLeavingHome] = useState(false)

    function changeNightMode() {
        setNightMode(!nightMode)
    }

    function changeLeavingHome() {
        setLeavingHome(!leavingHome)
    }

    return (
        <div className="dark:text-white bg-add_light dark:bg-add_dark rounded-30px h-387px shadow-xl pt-15px px-22px flex flex-col items-center">
            <p className='text-18px ml-20px w-full'>Alarm system</p>
            <div className="mt-21px w-full">
                <div className='flex items-center mb-5px pr-10px'>
                    <Switch mainColor='green' toggle={nightMode} setToggle={changeNightMode} />
                    <h3 className='ml-20px'>Night mode</h3>
                </div>
                <div className='flex items-center mb-5px pr-10px'>
                    <Switch mainColor='green' toggle={leavingHome} setToggle={changeLeavingHome} />
                    <h3 className='ml-20px'>Leaving home</h3>
                </div>
            </div>

            <div className="mt-18px shadow-alarm_area dark:text-dark_alarm_key shadow-inner grid grid-cols-3 grid-rows-3 w-177px h-177px rounded-10px p-8px gap-5px bg-gradient-to-b from-main_from_light to-main_to_light
        dark:from-main_from_dark dark:to-add_black">
                {
                    items.map(item =>
                        <button className="w-50px h-50px bg-add_light dark:bg-add_dark text-add_gray dark:text-dark_alarm_key shadow-alarm_button rounded-2px">
                            <p className="text-24px font-bold">{item}</p>
                        </button>
                    )
                }

            </div>
            <div className="flex justify-start mt-7px w-full">
                <button className='flex flex-col mx-5px text-light_gray cursor-pointer'>
                    <p className="text-12px mb-3px">Settings</p>
                    <div className="border-b-1px border-light_gray w-2/4"/>
                </button>
            </div>
        </div>
    );
};

export default Alarm;
