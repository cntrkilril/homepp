import React, {useState} from 'react';
import Search from "../../icons/Search";
import ThreeDot from "../../icons/ThreeDot";

const UsersUsers = () => {

    let [users, setUsers] = useState([
        {
            name: 'Marina O.',
            role: 'Owner',
            last_action: 'Close window6',
            status: 'At home'
        },
        {
            name: 'Marina O.',
            role: 'Owner',
            last_action: 'Close window6',
            status: 'At home'
        },
    ])

    return (
        <div className="flex flex-col bg-main_gray pt-27px pb-150px px-39px rounded-25px gap-20px">
            <div className="flex flex-row ml-20px items-center justify-center w-full">
                <div className="mr-30px flex flex-row">
                    <label className="mr-13px text-light_gray">Role</label>
                    <select className="text-light_gray bg-main_gray">
                        <option>All</option>
                    </select>
                </div>

                <div className="flex flex-row">
                    <label className="mr-13px text-light_gray">Status</label>
                    <select className="text-light_gray bg-main_gray">
                        <option>All</option>
                    </select>
                </div>

                <div className="flex flex-row justify-end w-full">
                    <div className="bg-dark_gray rounded-41px text-light_gray px-20px py-13px shadow-alarm_area flex flex-row items-center w-200px">
                        <button className="mr-19px">
                            <Search />
                        </button>
                        <input className="text-light_gray bg-dark_gray w-full" placeholder="Search users"/>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-auto_auto_auto_auto_auto_auto ml-20px gap-x-35px gap-y-34px">
                <div className="rounded-circle w-23px h-23px bg-light_gray" />
                <button className="flex flex-row">
                    <p className="text-light_gray">Name</p>
                </button>
                <p className="text-light_gray">Role</p>
                <p className="text-light_gray">Last Action</p>
                <p className="text-light_gray">Status</p>
                <div />
                {
                    users.map((item) =>
                        <>
                            <div />
                            <div className="flex flex-row items-center">
                                <div className="w-30px h-30px bg-light_gray rounded-circle mr-8px" />
                                <p className="text-light_gray">{item.name}</p>
                            </div>
                            <p className="text-light_gray">{item.role}</p>
                            <p className="text-light_gray">{item.last_action}</p>
                            <p className="text-light_gray">{item.status}</p>
                            <button className="flex justify-center items-center">
                                <ThreeDot />
                            </button>
                        </>
                    )
                }
            </div>

        </div>
    );
};

export default UsersUsers;
