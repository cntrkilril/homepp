import React, {useState} from 'react';
import User from "../../icons/User";
import './AccessControl.css'

const AccessControl = () => {

    const [accounts, setAccounts] = useState([
        {
            name: 'name',
        },
        {
            name: 'name',
        },
        {
            name: 'name',
        },
        {
            name: 'name',
        },
        {
            name: 'name',
        },
        {
            name: 'name',
        },
        {
            name: 'name',
        },
        {
            name: 'name',
        },
    ])

    return (
        <div className="shadow-xl flex flex-col px-39px rounded-25px dark:text-white shadow-xl dark:bg-add_dark pb-20px">
            <p className="text-18px mt-20px mb-20px">Protection</p>
            <div className="flex flex-row flex-wrap overflow-y-auto h-200px justify-start access-control">
                <div className="flex flex-col mr-20px mb-10px">
                    <button className={`h-60px w-60px flex flex-col justify-center items-center rounded-10px border-dark_green border-2px`}>
                        <p className="text-dark_green text-40px">+</p>
                    </button>
                    <h3 className="text-center mt-8px text-light_gray">New</h3>
                </div>
                {
                    accounts.map((item, id) =>
                        <div className="flex flex-col items-center mr-20px mb-10px">
                            <button className={`h-60px w-60px flex flex-col justify-center items-center rounded-10px dark:bg-dark_gray`}>
                                <User />
                            </button>
                            <h3 className="text-center mt-8px text-light_gray">{item.name}</h3>
                        </div>
                    )
                }
            </div>
            <div className="flex justify-start mt-15px w-full">
                <button className='flex flex-col mx-5px text-light_gray cursor-pointer'>
                    <p className="text-12px mb-3px">Settings</p>
                    <div className="border-b-1px border-light_gray w-2/4"/>
                </button>
            </div>
        </div>
    );
};

export default AccessControl;
