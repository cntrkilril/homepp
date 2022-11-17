import React, { useState } from 'react';
import profile from "../../assets/img/png/profile.png";
import password from "../../assets/img/png/password.png";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { API_KEY } from './../../config/config';
import { useNavigate } from 'react-router-dom';

const Authorization = () => {

    const [fields, setFields] = useState(true)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const submitLogin = (e) => {
        let flag = true;
        e.preventDefault();
        if (e.target[0].value.length === 0 || e.target[1].value.length === 0) flag = false;
        let body = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        setFields(flag)
        if (flag) {
            axios.post(`${API_KEY}/user/login/`, body)
                .then(res => {
                    if (res.status === 200) {
                        dispatch({ type: 'SET_AUTH', auth: false })
                        navigate('/overview')
                        localStorage.setItem('status', 1)
                    }
                })
        }
    }

    return (
        <form onSubmit={(e) => submitLogin(e)}>
            <div className="w-screen h-screen flex flex-col text-white">
                <div className='flex flex-col justify-between text-white'>
                    <h2 className='text-center mt-16 text-4xl text-white'>HOME++</h2>
                    <div className='text-center mt-12 text-5xl text-white'>Authorization</div>
                    <div className='mx-auto mt-32 relative'>
                        {!fields ? <div className='absolute -top-10'>Fill all fields</div> : ''}
                        <div className='flex'>
                            <div className='w-60px h-60px bg-add_gray flex flex-col rounded-md'><img className='w-20px h-20px m-auto' src={profile} /></div>
                            <input name="email" placeholder='Email' className='ml-2 pl-10 bg-add_gray rounded-md' />
                        </div>
                        <div className='flex mt-14'>
                            <div className='w-60px h-60px bg-add_gray flex flex-col rounded-md'><img className='w-20px h-23px m-auto' src={password} /></div>
                            <input name="password" type="password" placeholder='Password' className='ml-2 pl-10 bg-add_gray rounded-md' />
                        </div>
                    </div>
                    <div className='mx-auto flex justify-between w-285px'>
                        <button className='bg-swiper_theme w-120px h-60px rounded-all_button mx-auto mt-24' type="submit">Sign in</button>
                        <Link to="/registration">
                            <button className='border w-120px h-60px rounded-all_button mx-auto mt-24 text-white' type="button">Sign up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Authorization;