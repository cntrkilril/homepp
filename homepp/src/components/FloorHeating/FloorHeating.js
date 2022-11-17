import React, {useState} from 'react';
import Switch from "../Switch/Switch";
import SemiCircle from "../../icons/SemiCircle";
import Plus from "../../icons/Plus";
import Minus from "../../icons/Minus";

const Floorheating = () => {

    const [toggle, setToggle] = useState();
    const [temp, setTemp] = useState(25);

    return (
        <div className="shadow-xl grid h-380px px-40px rounded-25px dark:text-white shadow-xl dark:bg-add_dark py-20px">
            <div className="flex items-center justify-between">
                <p className="text-18px">Floor heating</p>
                <Switch toggle={toggle} setToggle={setToggle} mainColor='green' />
            </div>
            <div className="relative flex items-center justify-between">
                <button className="flex bg-add_gray w-35px h-35px items-center justify-center rounded-5px" onClick={() => setTemp(temp - 1)}>
                    <Minus />
                </button>
                    <SemiCircle />
                <p className="absolute text-34px top-25px text-red" style={{left: '50%', transform: 'translate(-50%)'}}>{temp}°</p>
                <button className="flex bg-green w-35px h-35px items-center justify-center rounded-5px" onClick={() => setTemp(temp + 1)}>
                    <Plus />
                </button>
            </div>
        </div>
    );
};

export default Floorheating;
