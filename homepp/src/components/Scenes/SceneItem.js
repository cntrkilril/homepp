import React from 'react';
import Crescent from './icons/Crescent';

const SceneItem = ({data}) => {

    return (
        <div className='w-217px h-180px bg-scenes_item rounded-25px text-white flex flex-col justify-between py-15px px-22px'>
            <span>{data.name}</span>
            <Crescent/>
            <span>{(data.room.length === 6 ? "All rooms" : data.room.length + ' rooms')}</span>
            <span>{data.actions.length + ' actions'}</span>
        </div>
    );
};

export default SceneItem;