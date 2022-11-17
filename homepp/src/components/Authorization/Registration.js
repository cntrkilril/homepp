import React, { useState } from 'react';
import profile from "../../assets/img/png/profile.png";
import password from "../../assets/img/png/password.png";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from '../../config/config';
import { useNavigate } from 'react-router-dom';
const Authorization = () => {

    const [fields, setFields] = useState(true)

    const navigate = useNavigate()

    const submitLogin = (e) => {
        let flag = true;
        e.preventDefault();
        for (let i = 0; i < 5; i++)
            if (e.target[i].value.length === 0) flag = false
        setFields(flag)
        const body = {
            email: e.target.email.value,
            username: e.target.username.value.toString(),
            registration_key: e.target.key.value.toString(),
            password: e.target.password.value.toString(),
            password2: e.target.password2.value.toString(),
        }
        // console.log(body)
        if (flag){
            axios
            .post(`${API_KEY}/user/register`, body)
            .then((res) => navigate('/login'))
        }
    }

return (
    <form onSubmit={(e) => submitLogin(e)}>
        <div className="w-screen h-screen flex flex-col text-white">
            <div className='flex flex-col justify-between'>
                <h2 className='text-center mt-16 text-4xl'>HOME++</h2>
                <div className='text-center mt-12 text-5xl'>Authorization</div>
                <div className='mx-auto mt-32 relative'>
                    {!fields ? <div className='absolute -top-10'>Fill all fields</div> : ''}
                    <div className='flex'>
                        <div className='w-60px h-60px bg-add_gray flex flex-col rounded-md'><img className='w-20px h-20px m-auto' src={profile} /></div>
                        <input name="email" type="email" placeholder='Email' className='ml-2 pl-10 bg-add_gray rounded-md' />
                    </div>
                    <div className='flex mt-14'>
                        <div className='w-60px h-60px bg-add_gray flex flex-col rounded-md'><img className='w-20px h-23px m-auto' src={password} /></div>
                        <input name="username" placeholder='Username' className='ml-2 pl-10 bg-add_gray rounded-md' />
                    </div>
                    <div className='flex mt-14'>
                        <div className='w-60px h-60px bg-add_gray flex flex-col rounded-md'><img className='w-20px h-23px m-auto' src={password} /></div>
                        <input name="key" type="key" placeholder='Registration key' className='ml-2 pl-10 bg-add_gray rounded-md' />
                    </div>
                    <div className='flex mt-14'>
                        <div className='w-60px h-60px bg-add_gray flex flex-col rounded-md'><img className='w-20px h-23px m-auto' src={password} /></div>
                        <input name="password" placeholder='Password' className='ml-2 pl-10 bg-add_gray rounded-md' />
                    </div>
                    <div className='flex mt-14'>
                        <div className='w-60px h-60px bg-add_gray flex flex-col rounded-md'><img className='w-20px h-23px m-auto' src={password} /></div>
                        <input name="password2" placeholder='Password confirm' className='ml-2 pl-10 bg-add_gray rounded-md' />
                    </div>
                </div>
                <div className='mx-auto flex justify-between w-285px'>
                    <button className='bg-swiper_theme w-120px h-60px rounded-all_button mx-auto mt-24' type="submit">Sign up</button>
                    <Link to="/login">
                        <button className='border w-120px h-60px rounded-all_button mx-auto mt-24 text-white' type="button">Sign in</button>
                    </Link>
                </div>
            </div>
        </div>
    </form>
);
};

export default Authorization;