import React, {useState} from 'react';
import User from "../../icons/User";
import RadioButton from "../RadioButton/RadioButton";

const UserUsers = ({user}) => {

    const [selectAll, setSelectAll] = useState(false)

    return (
        <div className="flex flex-row bg-main_gray pt-40px pb-150px px-39px rounded-25px gap-30px">
            <div className="flex flex-col">
                <div className="ml-20px mb-36px self-start">
                    <div className="w-156px h-156px bg-light_gray rounded-25px flex justify-center items-center">
                        <User width={72} height={72} color={'dark_gray'}/>
                    </div>
                    <p className="w-full text-center text-light_gray mt-7px text-16px">{user.surname + ' ' + user.name[0] + '.'}</p>
                </div>
                <div className="">
                    <div className="grid grid-cols-70px_auto mb-25px">
                        <p className="text-light_gray">Name:</p>
                        <p className="text-light_gray text-16px self-center">{user.name + ' ' + user.surname}</p>
                    </div>
                    <div className="grid grid-cols-70px_auto mb-25px">
                        <p className="text-light_gray">Sex:</p>
                        <p className="text-light_gray text-16px self-center">{user.sex}</p>
                    </div>
                    <div className="grid grid-cols-70px_auto mb-25px">
                        <p className="text-light_gray">Age:</p>
                        <p className="text-light_gray text-16px self-center">{user.age}</p>
                    </div>
                    <div className="grid grid-cols-70px_auto mb-25px">
                        <p className="text-light_gray">Role:</p>
                        <p className="text-light_gray text-16px self-center">{user.role}</p>
                    </div>
                    <div className="grid grid-cols-70px_auto">
                        <p className="text-light_gray">Email:</p>
                        <p className="text-light_gray text-16px self-center">{user.email}</p>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <p className="ml-25px text-light_gray mb-14px">Permissions</p>
                <div className="bg-dark_gray rounded-10px h-calc(100%-38px) px-25px py-17px flex flex-row">
                    <div className="grid grid-cols-auto_auto_auto_auto_auto gap-15px self-start items-center justify-items-center">
                        <button onClick={() => setSelectAll(!selectAll)} className="text-16px min-w-82px text-light_gray bg-main_gray py-4px px-7px rounded-10px mb-6px">
                            Select all
                        </button>
                        <p className="text-light_gray text-16px mb-7px">View</p>
                        <p className="text-light_gray text-16px mb-7px">Create</p>
                        <p className="text-light_gray text-16px mb-7px">Modify</p>
                        <p className="text-light_gray text-16px mb-7px">Run</p>
                        
                        <p className="ml-7px text-light_gray text-16px justify-self-start">Lights</p>
                        <RadioButton activate={selectAll}/>
                        <RadioButton activate={selectAll}/>
                        <RadioButton activate={selectAll}/>
                        <RadioButton activate={selectAll}/>

                        <p className="ml-7px text-light_gray text-16px justify-self-start">Sound</p>
                        <RadioButton activate={selectAll}/>
                        <RadioButton activate={selectAll}/>
                        <RadioButton activate={selectAll}/>
                        <RadioButton activate={selectAll}/>

                        <p className="ml-7px text-light_gray text-16px justify-self-start">Climate</p>
                        <RadioButton activate={selectAll}/>
                        <RadioButton activate={selectAll}/>
                        <RadioButton activate={selectAll}/>
                        <RadioButton activate={selectAll}/>

                        <p className="ml-7px text-light_gray text-16px justify-self-start">TV</p>
                        <RadioButton activate={selectAll}/>
                        <RadioButton activate={selectAll}/>
                        <RadioButton activate={selectAll}/>
                        <RadioButton activate={selectAll}/>

                        <p className="ml-7px text-light_gray text-16px justify-self-start">Security</p>
                        <RadioButton activate={selectAll}/>
                        <RadioButton activate={selectAll}/>
                        <RadioButton activate={selectAll}/>
                        <RadioButton activate={selectAll}/>

                    </div>
                </div>
            </div>

            <div className="w-full">
                <p className="ml-25px text-light_gray mb-14px">Recent Action</p>
                <div className="flex flex-row w-full bg-dark_gray rounded-10px h-calc(100%-38px) px-25px py-17px">
                    <div className="grid grid-cols-2 self-start gap-y-15px w-auto">
                        <p className="text-light_gray text-16px">Time</p>
                        <p className="text-light_gray text-16px">Action</p>
                        {
                            user.actions.map((item) =>
                                <>
                                    <p className="text-light_gray text-16px">{item.time}</p>
                                    <p className="text-light_gray text-16px">{item.action}</p>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserUsers;
