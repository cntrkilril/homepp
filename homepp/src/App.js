import './styles/App.css'
import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Sidebar from "./components/Sidebar/Sidebar";
import SecurityPage from "./pages/SecurityPage";
import NotificationsPage from "./pages/NotificationsPage";
import OverviewPage from "./pages/OverviewPage";
import RoomsPage from "./pages/RoomsPage";
import ScenesPage from "./pages/ScenesPage";
import SettingsPage from "./pages/SettingsPage";
import UsersPage from "./pages/UsersPage";
import './styles/App.css'
import { Route, Routes } from "react-router-dom";
import Authorization from "./components/Authorization/Authorization";
import Registration from './components/Authorization/Registration'
import Documentation from "./components/Documentation/Documentation";
import { useSelector } from 'react-redux';
import SystemStatusPage from './pages/SystemStatusPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {

    // functional Sidebar
    let statusActive
    if (localStorage) {
        statusActive = localStorage.getItem('status')
        statusActive = true
    }
    else {
        statusActive = true
        // statusActive = false
    }
    const [sidebarActive, setSideBarActive] = useState(!!statusActive)
    function changeSidebar() {
        setSideBarActive(!sidebarActive)
    }
    function setSidebar() {
        return sidebarActive
    }

    const authorizationFromRedux = useSelector((state) => state.auth.auth)

    const [authorization, setAuthorization] = useState(authorizationFromRedux)

    useEffect(() => {
        if (localStorage.getItem('status') === 1) setAuthorization(false)
        else setAuthorization(authorizationFromRedux)
    }, [authorizationFromRedux])

    return (
        <div className="bg-main_gray pr-20px">
            {authorization ?
                <div>
                    <Routes>
                        <Route path='/login' element={<Authorization />} />
                        <Route path='/registration' element={<Registration />} />
                        <Route path='*' element={<Authorization />} />
                    </Routes>
                </div>
                :
                <div className="App duration-300 grid gap-x-20px grid-cols-24 grid-rows-75px_auto">
                    <Sidebar />
                    <Header />
                    <main className="main bg-dark_gray rounded-25px grid col-start-6 col-end-25 h-main_height overflow-y-auto shadow-main">
                        <div className="ml-25px fixed w-calc(100%/24*19-20px-25px-25px) h-5px bg-shadow_main shadow-main" />
                        <Routes>
                            <Route path='/overview' element={<OverviewPage />} />
                            <Route path='/rooms' element={<RoomsPage />} />
                            <Route path='/scenes' element={<ScenesPage />} />
                            <Route path='/system-status' element={<SystemStatusPage />} />
                            <Route path='/users' element={<UsersPage />} />
                            <Route path='/settings' element={<SettingsPage />} />
                            <Route path='/security' element={<SecurityPage />} />
                            <Route path='/notifications' element={<NotificationsPage />} />
                            <Route path='/registration' element={<RegistrationPage />} />
                            <Route path='/docs' element={<Documentation />} />
                            <Route path='*' element={<OverviewPage />} />
                        </Routes>

                    </main>
                    <div className="absolute left-calc(100%/24*5+25px) bottom-0 col-start-1 col-end-25
                h-19px w-calc(100%/24*19-20px-25px-25px) bg-add_light shadow-footer bg-main_gray"/>
                </div>
            }
        </div>
    );
}

export default App;
