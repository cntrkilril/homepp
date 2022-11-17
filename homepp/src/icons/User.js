import React from 'react';

const User = ({width = 27, height = 27, color = 'light_gray'}) => {
    return (
        <svg width={`${width}`} height={`${height}`} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={`stroke-current text-${color}`} d="M13.9654 13.4999C17.2724 13.4999 19.9532 10.7017 19.9532 7.24997C19.9532 3.79821 17.2724 1 13.9654 1C10.6584 1 7.97754 3.79821 7.97754 7.24997C7.97754 10.7017 10.6584 13.4999 13.9654 13.4999Z" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path className={`stroke-current text-${color}`} d="M24.66 20.6875C27.3552 22.4772 25.6649 26.0001 22.4239 26.0001H4.57609C1.33513 26.0001 -0.355205 22.4772 2.33997 20.6875C5.53351 18.5669 9.37154 17.3306 13.5 17.3306C17.6285 17.3306 21.4665 18.5669 24.66 20.6875Z" strokeWidth="1.66667"/>
        </svg>
    );
};

export default User;
