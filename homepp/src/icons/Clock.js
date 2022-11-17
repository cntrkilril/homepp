import React from 'react';

const Clock = () => {
    return (
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke-current text-add_dark dark:text-white" cx="15.5" cy="15.5" r="14.5" stroke="black" strokeWidth="2" />
            <line className="stroke-current text-add_dark dark:text-white" x1="15.5487" y1="15.1374" x2="16.6263" y2="9.02584" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <line className="stroke-current text-add_dark dark:text-white" x1="15.5276" y1="15.9172" x2="11.6711" y2="24.1877" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
};

export default Clock;