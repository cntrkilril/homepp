import React from 'react';
import "./Switch.css"
const Switch = ({ width = 33, height = 17, mainColor = "orange", setToggle, toggle }) => {
    return (
        <label onChange={() => { setToggle(!toggle) }} className={`relative left-4 inline-block w-${width + 10}px h-${height + 7}px switch`}>
            <input className="opacity-0 w-0 h-0" type="checkbox" checked={toggle} />
            <span className={toggle ? `slider absolute cursor-pointer inset-0
            rounded-17px ${mainColor} ` : `slider absolute cursor-pointer inset-0
            rounded-17px dark`} />
        </label>
    );
};

export default Switch;