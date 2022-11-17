import React, {useState} from 'react';

const RadioButton = ({activate = false}) => {

    const [active, setActive] = useState(activate)

    return (
        <button onClick={() => setActive(!active)} className={`w-23px h-23px rounded-circle flex items-center justify-center ${active ? "bg-green" : "bg-light_gray"}`}>
            <div className="rounded-circle border-5px border-light_gray w-18px h-18px border-solid" />
        </button>
    );
};

export default RadioButton;
