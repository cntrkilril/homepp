import React from 'react';

const MyComponent = (props) => {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={props.status ? 'stroke-current text-red' : 'stroke-current text-light_gray'} d="M21.1894 2.30762H25.5271C26.5297 2.30762 26.9086 3.61856 26.0606 4.15341L21.5364 7.00721C20.8683 7.42859 21.1668 8.46139 21.9567 8.46139V8.46139H27.0263" strokeWidth="2" strokeLinecap="round"/>
            <path className={props.status ? 'stroke-current text-red' : 'stroke-current text-light_gray'} d="M28.5592 20.5539C28.7306 20.5279 28.8824 20.5961 28.9599 20.6783C28.9948 20.7154 28.9998 20.7392 29 20.7398C29 20.7401 29 20.7396 28.9999 20.7405C28.9998 20.7413 28.9986 20.7512 28.989 20.771C26.6429 25.6274 21.5763 29 15.6911 29C7.55519 29 1 22.5634 1 14.6726C1 8.28156 5.29639 2.84718 11.2568 1.00918C11.3037 0.994724 11.3232 1.00109 11.3303 1.0034L11.3304 1.00341C11.3433 1.00762 11.3711 1.02107 11.4033 1.0591C11.474 1.14246 11.5123 1.2797 11.4708 1.41624C11.0569 2.77705 10.835 4.21778 10.835 5.70755C10.835 14.027 17.7326 20.7315 26.1917 20.7315C26.9962 20.7315 27.7869 20.6709 28.5592 20.5539Z" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
    );
};

export default MyComponent;
