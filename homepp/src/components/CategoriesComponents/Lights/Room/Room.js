import React, {useState} from 'react';
import LampOn from "../../../icons/Lamp/LampOn";
import Switch from "../../../Switch/Switch";
import LampOff from "../../../icons/Lamp/LampOff";

const Room = ({item, setItem}) => {
    const [toggle, setToggle] = useState(item.condition)
    const setCondition = (condition) => {
        setToggle(condition)
        setItem(item)
    }

    return (
        <div className="flex justify-between pr-30px">
            <div className="flex py-13px">
                {
                    item.condition
                    ? <LampOn/>
                    : <LampOff/>

                }
                <p className="ml-17px">{item.id + ' room lights'}</p>
            </div>
            <div className="my-auto h-16px">
                <Switch toggle={toggle} setToggle={setCondition} mainColor='green' />
            </div>
        </div>
    );
};

export default Room;
