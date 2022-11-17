import React, { useState } from 'react';
import Weather from "./Icons/Weater";
import Search from "./Icons/Search";
import Connection from "./Icons/Connection";
const Header = ({sidebarActive}) => {

    const [time, setTime] = useState(`${new Date().toLocaleTimeString()}`.substring(0, 5));

    const getCurrentTime = () => {
        setInterval(() => {
            setTime(`${new Date().toLocaleTimeString()}`.substring(0, 5))
        }, 1000);
    }

    return (
         <header className="relative ml-25px mr-25px h-84px flex flex-row items-center justify-between col-start-6 col-end-25 shadow-header">
             <div className="grid grid-cols-44px_auto ml-50px">
                 <div className="bg-green w-44px h-44px rounded-8px font-bold text-white flex justify-center items-center">
                    Е
                 </div>
                 <div className="flex flex-col pl-8px">
                     <p className="dark:text-dark_text">
                         Елизавета
                     </p>
                     <p className="dark:text-light_gray">
                         scripnik@demo.com
                     </p>
                 </div>
             </div>
             <div className="flex flex-row justify-center items-center">
                <p className="text-24px dark:text-light_gray mr-10px">15°C</p>
                <Weather/>
            </div>
            <div className="pl-19px pr-10px flex items-center shadow-md dark:bg-categories_black h-60px w-257px rounded-8px ">
                <button className="">
                    <Search/>
                </button>
                <input className="px-9px shadow-md dark:bg-categories_black h-60px w-232px rounded-8px outline-none text-black dark:text-white"
                        placeholder="Search..."
                />
            </div>
            <div className="ml-18px">
                <Connection/>
            </div>
        </header>
    );
};
export default Header;
