import React from 'react';
import GraphSVG from '../../assets/img/svg/GraphSVG';
const Graph = () => {

    const CurrentDate = () => {
        let day = new Date().getDay().toString()
        day = day.length === 1 ? '0' + day : day
        let month = new Date().getMonth().toString()
        month = month.length === 1 ? '0' + month : month
        let year = new Date().getFullYear().toString()
        return (
            <div className='mx-2 bg-white rounded-md h-23px px-2 dark:bg-add_black'>
                {day + "." + month + "." + year}
            </div>
        )
    }

    return (
        <div className='flex flex-col justify-between shadow-2xl bg-add_dark grid ml-20 h-335px rounded-section_item dark:text-white'>
            <div className="ml-11 mt-4">
                <span className="text-4xl">Graphics</span>
            </div>
            <div className='w-335px flex justify-center'><GraphSVG /></div>
            <div className='flex justify-center'>
                <div>
                    <select className='rounded-md dark:bg-add_black'>
                        <option>Temperature</option>
                        <option>Temperature</option>
                    </select>
                </div>
                <CurrentDate/>
                <div>
                    <select className='rounded-md dark:bg-add_black'>
                        <option>Kitchen</option>
                        <option>Kitchen</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Graph;