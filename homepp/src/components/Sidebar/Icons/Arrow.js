import React from 'react';

const Arrow = () => {
    return (
        <svg className="w-8 h-8 self-center" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <line className="stroke-current text-add_dark dark:text-white" x1="18.183" y1="11.5972" x2="12" y2="5.4142" strokeWidth="2" strokeLinecap="round"/>
            <line className="stroke-current text-add_dark dark:text-white" x1="12.3599" y1="18.1084" x2="18.5428" y2="11.9255" strokeWidth="2" strokeLinecap="round"/>
            <line className="stroke-current text-add_dark dark:text-white" x1="11.183" y1="11.5972" x2="4.99998" y2="5.4142" strokeWidth="2" strokeLinecap="round"/>
            <line className="stroke-current text-add_dark dark:text-white" x1="5.35986" y1="18.1084" x2="11.5428" y2="11.9255" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    );
};

export default Arrow;