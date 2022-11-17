import React from 'react';
import lamp from "../../../../assets/img/png/lamp.png"
import lamp_line from "../../../../assets/img/svg/lamp_line.svg"
const TurnOffLights = ({ switchLights, setActivateConfirm }) => {

    const yesClick = () => {
        switchLights(false)
        setActivateConfirm(false)
    }

    return (
        <div className='absolute z-20 left-0 top-0 bg-modal_window w-screen h-screen text-center flex'>
            <div className='m-auto w-300px h-170px dark:bg-add_dark bg-add_light flex flex-col justify-between rounded-section_item'>
                <div className='relative flex justify-center mt-8'><img src={lamp} /><img className='absolute z-20 left-30' src={lamp_line} /></div>
                <div>Do you really want to turn off <br /> all the lights?</div>
                <div className='flex justify-between mb-8'>
                    <div onClick={() => yesClick()} className='flex justify-center w-120px h-33px bg-blue rounded-section_item cursor-pointer ml-8'>
                        <span className='mt-2'>Yes</span>
                    </div>
                    <div onClick={() => setActivateConfirm(false)} className='flex justify-center w-120px h-33px bg-add_gray dark:bg-add_dark rounded-section_item cursor-pointer mr-8'>
                        <span className='mt-2'>No</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TurnOffLights;