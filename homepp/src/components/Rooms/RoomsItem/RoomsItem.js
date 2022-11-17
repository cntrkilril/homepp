import React from 'react';
import add from '../../../assets/img/png/add.png'
const RoomsItem = ({ currentRooms }) => {
    return ( 
        <div className="grid grid-cols-3 mt-6 gap-y-8">
            {currentRooms.map((x) =>
                <div key={x} className="cursor-pointer mx-auto">
                    <div className="h-75px w-75px bg-add_black rounded-section_item flex flex-col justify-center">
                        {x === 'add' ? <img className='mx-auto' src={add} /> : <></>}
                    </div>
                    {
                        x !== 'add' ? <h3 className="w-75px text-center mt-15px">Room {x}</h3>
                            :
                            <h3 className="w-75px text-center mt-15px">Add</h3>
                    }
                </div>
            )}
        </div>
    );
};

export default RoomsItem;