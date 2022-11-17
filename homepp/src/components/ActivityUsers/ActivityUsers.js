import React, {useState} from 'react';

const ActivityUsers = () => {

    const [actions, setAcction] = useState([
        {
            time: '14:38:15',
            action: 'Marina O. left house',
            location: ''
        },
        {
            time: '14:03:29',
            action: 'Pavel M. turn on TV',
            location: 'Room 6'
        },
    ])

    return (
        <div className="flex flex-col bg-main_gray pt-15px pb-150px px-84px rounded-25px gap-20px">
            <div className="py-4px pl-16px pr-28px bg-add_gray rounded-10px w-auto self-center">
                <p className="text-light_gray w-auto">Tuesday, 5th April 2022</p>
            </div>
            <div className="grid grid-cols-auto_auto_auto self-start gap-x-35px gap-y-34px">
                <p className="text-light_gray mb-5px">Time</p>
                <p className="text-light_gray mb-5px">Action</p>
                <p className="text-light_gray mb-5px">Location</p>
                {
                    actions.map((item) =>
                        <>
                            <p className="text-light_gray text-16px">{item.time}</p>
                            <p className="text-light_gray text-16px">{item.action}</p>
                            <p className="text-light_gray text-16px">{item.location}</p>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default ActivityUsers;
