import React, {useState} from 'react';
import Theme from "./Theme";
import Moon from "./Moon";

const ButtonTheme = () => {
    let theme;

    if (localStorage) {
        theme = localStorage.getItem('theme')
    }
    else {
        theme = 'light'
    }

    const [lightThemeActive, setLightThemeActive] = useState(theme)

    document.documentElement.classList.add(lightThemeActive)

    const switchTheme = () => {
        if (theme === 'dark') {
            document.documentElement.classList.replace('dark', 'light');
            localStorage.setItem('theme', 'light');
            setLightThemeActive('light')
        }
        else {
            document.documentElement.classList.replace('light', 'dark');
            localStorage.setItem('theme', 'dark');
            setLightThemeActive('dark')
        }
    }

    return (
        <div className="w-full grid grid-cols-50px_auto_auto px-14px h-55px items-center justify-items-center rounded-8px">
            <div className="flex justify-center items-center">
                <Theme/>
            </div>
            <p className='dark:text-light_gray justify-self-start'>{(lightThemeActive==='dark') ? 'Light' : 'Dark'} theme</p>

            <button onClick={() => switchTheme()} className='w-32px h-20px'>
                <div className={lightThemeActive === 'light'
                    ? 'flex items-center justify-end w-32px rounded-full bg-dark_black p-2px duration-3'
                    : 'flex items-center justify-start w-32px rounded-full bg-dark_black p-2px duration-3'} >
                    <div className="rounded-full bg-black_btn_theme w-16px h-16px flex justify-center items-center">
                        <Moon />
                    </div>
                </div>
            </button>

        </div>
    );
};

export default ButtonTheme;