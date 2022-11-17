import React, {useState} from 'react';
import validator from "validator/es";
import {data} from "autoprefixer";
import {useNavigate} from "react-router-dom";
import Overview from "../components/Sidebar/Icons/Overview";
import OverviewPage from "./OverviewPage";
const LoginPage = (props) => {

    let [emailValue, setEmailValue] = useState('')
    let [passwordValue, setPasswordValue] = useState('')

    const [isAuth, setIsAuth] = useState(false)


    const navigate = useNavigate()

    function registerSubmit(event) {
        let flag = false
        let regObject = {
            email: emailValue,
            password: passwordValue,
        }
        if (validateEmail(emailValue) === '-1') {
            flag = true
            console.log('e')

        }
        if (validatePassword(passwordValue) === '-1') {
            flag = true
            console.log('p')
        }
        if (!flag) {
            let regObject = {
                email: emailValue,
                password: passwordValue,
            }
            fetch('http://127.0.0.1:8000/api/v1/user/login/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(regObject),
                    mode: 'cors'

                })
                .then(res => res.json()).then(data => {
                console.log(data)
                if (data.access) {
                    setIsAuth(true)
                    localStorage.setItem('loggedIn', true)
                    navigate('/overview')
                }
            })
        }
        event.preventDefault()
    }

    function validatePassword(passwordValue) {
        if (passwordValue.length > 8 && passwordValue.length < 16 && /\d/.test(passwordValue)) {
            let flag = false
            for (let i=0; i < passwordValue.length; i++) {
                if (passwordValue[i].toUpperCase() === passwordValue[i]) {
                    flag = true
                    break
                }
            }
            if (flag) return passwordValue
            else return '-1'
        }
        else return '-1'
    }

    function validateEmail(emailValue) {
        if (validator.isEmail(emailValue)) {
            return emailValue
        }
        else return '-1'
    }

    return (
        <>
            { isAuth ?
                <OverviewPage/>
            :
                <div className="flex flex-col">
                    <h2 className="text-4xl w-full dark:text-white my-20px">Login</h2>
                    <label className="w-full dark:text-white">Email</label>
                    <input value={emailValue} onChange={(e) => setEmailValue(e.target.value)} className="w-300px p-5px rounded my-5px outline-none dark:bg-categories_black shadow-md text-black dark:text-white" type="email"  placeholder="example@example.com"/>
                    <label className="w-full dark:text-white">Password</label>
                    <input value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} className="w-300px p-5px rounded my-5px outline-none dark:bg-categories_black shadow-md text-black dark:text-white" type="password"/>
                    <button onClick={registerSubmit} className="w-300px p-5px rounded my-5px outline-none bg-add_dark text-white">Login</button>
                </div>
        }
        </>
    );
};

export default LoginPage;
