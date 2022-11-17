import React, {useState} from 'react';
import Switch from "../Switch/Switch";
import Locked from "./ImitationOfPresenceIcons/Locked";
import Unlocked from "./ImitationOfPresenceIcons/Unlocked";
import Lock from "../../icons/Lock";

const ImitationOfPresence = () => {

    const [openingSensors, setOpeningSensors] = useState([
        {
            name: 'Front door',
            status: true,
        },
        {
            name: 'Back door',
            status: false,
        },
        {
            name: 'Main door1',
            status: false,
        },
        {
            name: 'Main door2',
            status: true,
        },
    ])

    const updateStatus = (id) => {
        let newArr = [...openingSensors]
        newArr.map((x) => {
            if (x.id === id)
                newArr[x.id - 1].status = !newArr[x.id - 1].status;
        })
        setOpeningSensors(newArr)
    }

    return (
        <div className="shadow-xl flex flex-col px-39px rounded-25px dark:text-white shadow-xl dark:bg-add_dark pb-20px">
            <p className="text-18px mt-20px mb-20px">Protection</p>
            <div className="flex flex-col items-start">
                <button className="text-light_gray text-18px mb-12px">Imitation of presence</button>
                <button className="text-light_gray text-18px mb-12px">Smoke detection</button>
                <button className="text-light_gray text-18px mb-12px">Gas detection</button>
                <button className="text-light_gray text-18px mb-12px">Water detection</button>
            </div>
            <div className="border-b-1px border-light_gray mt-18px" />
            <p className="text-18px mt-18px mb-12px">Opening sensors</p>
            <div className="">
                {
                    openingSensors.map((item, id) =>
                        <div className="flex flex-row justify-between mb-12px">
                            <p className="text-light_gray">{item.name}</p>
                            <button>
                                <Lock status={item.status} set={updateStatus} id={id}/>
                            </button>
                        </div>
                    )
                }
            </div>
            <button className="px-8px py-2px bg-add_gray rounded-10px text-light_gray self-start">
                + New...
            </button>
        </div>
    );
};

export default ImitationOfPresence;
