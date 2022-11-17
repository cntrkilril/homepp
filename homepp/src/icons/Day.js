import React from 'react';

const Day = (props) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={props.status ? 'stroke-current text-red' : 'stroke-current text-light_gray'} d="M16 1V2.66667M16 29.3333V31M31 16H29.3333M2.66667 16H1M26.6067 26.6067L25.4283 25.4283M6.57167 6.57167L5.39333 5.39333M26.6067 5.39333L25.4283 6.57167M6.57167 25.4283L5.39333 26.6067M22.6667 16C22.6667 17.7681 21.9643 19.4638 20.714 20.714C19.4638 21.9643 17.7681 22.6667 16 22.6667C14.2319 22.6667 12.5362 21.9643 11.286 20.714C10.0357 19.4638 9.33333 17.7681 9.33333 16C9.33333 14.2319 10.0357 12.5362 11.286 11.286C12.5362 10.0357 14.2319 9.33333 16 9.33333C17.7681 9.33333 19.4638 10.0357 20.714 11.286C21.9643 12.5362 22.6667 14.2319 22.6667 16Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default Day;
