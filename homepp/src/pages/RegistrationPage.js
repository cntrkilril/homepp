import React, {useState} from 'react';
import validator from "validator/es";
import {data} from "autoprefixer";

const RegistrationPage = () => {

    let [loginValue, setLoginValue] = useState('')
    let [passwordValue, setPasswordValue] = useState('')
    let [confPasswordValue, setConfPasswordValue] = useState('')
    let [emailValue, setEmailValue] = useState('')
    let [keyValue, setKeyValue] = useState('')




    function registerSubmit(event) {
        let flag = false
        let regObject = {
            username: loginValue,
            email: emailValue,
            password: passwordValue,
            password2: confPasswordValue,
            registration_key: keyValue,
        }
        if (validateLogin(loginValue) === '-1') {
            flag = true
            console.log('l')

        }
        if (validateEmail(emailValue) === '-1') {
            flag = true
            console.log('e')

        }
        if (validatePassword(passwordValue) === '-1') {
            flag = true
            console.log('p')
        }
        if (validateConfPassword(confPasswordValue) === '-1') {
            flag = true
            console.log('cp')

        }
        if (!flag) {
            let regObject = {
                email: emailValue,
                username: loginValue,
                registration_key: keyValue,
                password: passwordValue,
                password2: confPasswordValue,
            }
            fetch('http://127.0.0.1:8000/api/v1/user/register/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(regObject),
                    mode: 'cors'

                })
                .then(res => res.json()).then(data => console.log(data))
        }
        event.preventDefault()
    }

    function validateLogin(loginValue) {
        if (loginValue.length > 4 && loginValue.length < 13) {
            return loginValue
        }
        else return '-1'
    }

    function validateEmail(emailValue) {
        if (validator.isEmail(emailValue)) {
            return emailValue
        }
        else return '-1'
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

    function validateConfPassword(confPasswordValue) {
        if (passwordValue === confPasswordValue) {
            return confPasswordValue
        }
        else return '-1'
    }

    return (
        <div className="flex flex-col">
            <h2 className="text-4xl w-full dark:text-white my-20px">Registration</h2>
            <label className="w-full dark:text-white">Login</label>
            <input value={loginValue} onChange={(e) => setLoginValue(e.target.value)} className="w-300px p-5px rounded my-5px outline-none dark:bg-categories_black shadow-md text-black dark:text-white" type="text"  placeholder="yourLogin"/>
            <label className="w-full dark:text-white">Email</label>
            <input value={emailValue} onChange={(e) => setEmailValue(e.target.value)} className="w-300px p-5px rounded my-5px outline-none dark:bg-categories_black shadow-md text-black dark:text-white" type="email"  placeholder="example@example.com"/>
            <label className="w-full dark:text-white">Password</label>
            <input value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} className="w-300px p-5px rounded my-5px outline-none dark:bg-categories_black shadow-md text-black dark:text-white" type="password"/>
            <label className="w-full dark:text-white">Confirm password</label>
            <input value={confPasswordValue} onChange={(e) => setConfPasswordValue(e.target.value)} className="w-300px p-5px rounded my-5px outline-none dark:bg-categories_black shadow-md text-black dark:text-white" type="password"/>
            <label className="w-full dark:text-white">Registration key</label>
            <input value={keyValue} onChange={(e) => setKeyValue(e.target.value)} className="w-300px p-5px rounded my-5px outline-none dark:bg-categories_black shadow-md text-black dark:text-white" type="text"  placeholder="RegKey"/>
            <button onClick={registerSubmit} className="w-300px p-5px rounded my-5px outline-none bg-add_dark text-white">Register</button>
        </div>
    );
};

export default RegistrationPage;
