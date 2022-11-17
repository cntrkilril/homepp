import React from 'react';
import Drop from './../components/icons/Drop';
import Lamp from './../icons/Lamp';
import Conditioner from './../icons/Conditioner';
import PeopleDetect from './../icons/PeopleDetect';
import Play from './../icons/Play';
import Window from './../icons/Window';
import TV from './../icons/TV';

const RoomsPage = () => {

    const rooms = [{
        name: 'Bedroom',
        temp: 21,
        humidity: 44,
        co2: 2500,
        light: 'main',
        conditioner_temp: 18,
        movement_detect: false,
    }]

    const arr = [1, 1, 1, 1, 1, 1]

    const Static = () => {
        return (
            <div className='w-335px h-293px bg-main_gray rounded-25px text-white px-24px py-18px'>
                <h3>Bedroom</h3>
                <div className='flex justify-between text-light_gray px-5' >
                    <span>21°C</span>
                    <span className='flex'>
                        <div className='my-auto'><Drop /></div>
                        <span className='ml-2'>44%</span>
                    </span>
                    <span>2500 CO2</span>
                </div>
                <div className='grid grid-cols-3 gap-y-8 mt-6 text-14px'>
                    <div className='flex shadow-md rounded-10px h-75px w-85px'>
                        <span className='mr-4 my-auto ml-2'>main</span>
                        <div className='my-auto'><Lamp /></div>
                    </div>
                    <div className='flex shadow-md rounded-10px h-75px w-85px'>
                        <span className='mr-4 my-auto ml-2'>18°C</span>
                        <div className='my-auto'><Conditioner /></div>
                    </div>
                    <div className='flex flex-col justify-between shadow-md rounded-10px h-75px w-85px'>
                        <div className='m-auto'><PeopleDetect /></div>
                        <span className='whitespace-nowrap text-14px mb-4 mx-auto ml-2'>not detected</span>
                    </div>
                    <div className='flex shadow-md rounded-10px h-75px w-85px'>
                        <span className='mr-4 my-auto ml-2'>TV</span>
                        <div className='my-auto'><TV /></div>
                    </div>
                    <div className='flex shadow-md rounded-10px h-75px w-85px'>
                        <span className='mr-4 my-auto ml-2'>play</span>
                        <div className='my-auto'><Play /></div>
                    </div>
                    <div className='flex shadow-md rounded-10px h-75px w-85px'>
                        <span className='mr-4 my-auto ml-2'>close</span>
                        <div className='my-auto'><Window /></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='flex flex-row flex-wrap gap-20px justify-between px-60px py-38px'>
            {arr.map(x => <Static />)}
        </div>
    );
};

export default RoomsPage;