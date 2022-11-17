import React from 'react';
import graphic from '../../assets/img/png/Graphic.png'


const GraphicsOverview = () => {
    return (
        <div className="shadow-xl grid h-380px px-40px rounded-25px dark:text-white shadow-xl dark:bg-add_dark py-20px">
            <p className="text-18px">Graphics</p>
            <div className="flex flex-row items-center justify-around mt-20px">
                <button className="text-18px text-red">Electric</button>
                <button className="text-18px text-green">Water</button>
                <button className="text-18px text-light_gray">All</button>
            </div>
            <img src={graphic}  alt="graphics"/>
        </div>
    );
};

export default GraphicsOverview;
