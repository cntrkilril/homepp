import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import '../../index.css'
import ButtonTheme from "../ButtonTheme/ButtonTheme";
import Overview from "./Icons/Overview";
import Rooms from "./Icons/Rooms";
import Scenes from "./Icons/Scenes";
import SystemStatus from "./Icons/SystemStatus";
import Users from "./Icons/Users";
import Settings from "./Icons/Settings";
import Notifications from "./Icons/Notifications";
import Security from "./Icons/Security";
import { useDispatch } from 'react-redux';

const Sidebar = () => {

    let list = [
        {title: 'Overview ', link: '/overview', icon: "overview"},
        {title: 'Rooms', link: '/rooms', icon: "rooms"},
        {title: 'Scenes', link: '/scenes', icon: "scenes"},
        {title: 'System status', link: '/system-status', icon: "system_status"},
        {title: 'Users', link: '/users', icon: "users"},
        {title: 'Security', link: '/security', icon: "security"},
        {title: 'Settings', link: '/settings', icon: "settings"},
        {title: 'Documentation', link: '/docs', icon: ""},
    ]

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlerLogout = (e) => {
        e.preventDefault()
        dispatch({type: "SET_AUTH", auth: true})
        localStorage.setItem('status', '0')
        navigate('/login')
    }

    return (
        <div className="col-start-1 col-end-6 grid h-screen w-full justify-items-center row-start-1 row-end-3 items-center" >
            <div className="w-119px h-119px bg-green rounded-25px mt-25px mb-20px">

            </div>
            <nav className="grid px-20px w-full justify-items-center">
                {list.map(item =>
                    <NavLink key={item.title}
                             className="w-full grid grid-cols-50px_auto px-14px h-55px items-center justify-items-center rounded-8px"
                             to={item.link}
                    >
                            <div className="flex justify-center items-center">
                                {
                                    {
                                        'overview': <Overview/>,
                                        'rooms': <Rooms/>,
                                        'scenes': <Scenes/>,
                                        'system_status': <SystemStatus/>,
                                        'users': <Users/>,
                                        'settings': <Settings/>,
                                        'security': <Security/>
                                    }[item.icon]
                                }
                            </div>
                            <p className="dark:text-light_gray justify-self-start">{item.title}</p>
                    </NavLink>
                )}
            </nav>
            <div className="grid px-20px w-full justify-items-center self-end grid mb-20px">
                <NavLink onClick={handlerLogout} to='/logout'
                         className="w-full grid grid-cols-50px_auto px-14px h-55px items-center justify-items-center rounded-8px"
                >
                        <div className="flex justify-center items-center">
                            <Notifications/>
                        </div>
                        <p className="dark:text-light_gray justify-self-start">Logout</p>
                </NavLink>
                <ButtonTheme />
            </div>
        </div>
    );
};

export default Sidebar;