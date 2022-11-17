import React from 'react';
import Lights from "../Categories/Icons/Lights";
import TV from "../Categories/Icons/TV";
import Intercom from "../Categories/Icons/Intercom";
import Sound from "../Categories/Icons/Sound";
import RoomOne from "../Categories/Icons/RoomOne";
import RoomTwo from "../Categories/Icons/RoomTwo";
import RoomThree from "../Categories/Icons/RoomThree";
import RoomFour from "../Categories/Icons/RoomFour";
import Day from "../../icons/Day";
import Night from "../../icons/Night";
import Outside from "../../icons/Outside";
import Inside from "../../icons/Inside";
import Add from "../../icons/Add";

const ScenesOverview = () => {

    const scenes = [
        {
            name: 'Day mode',
            component: 'day',
            status: true,
        },
        {
            name: 'Night mode',
            component: 'night',
            status: false,
        },
        {
            name: 'Outside',
            component: 'outside',
            status: false,
        },
        {
            name: 'Inside',
            component: 'inside',
            status: false,
        },
        {
            name: 'Add',
            component: 'add',
            status: false,
        },
    ]

    return (
        <div className="shadow-xl grid h-380px px-40px rounded-25px dark:text-white shadow-xl dark:bg-add_dark py-20px">
            <p className="text-18px">Scenes</p>
            <div className="flex flex-col items-center">
                {scenes.map((x) =>
                    <div key={x.name} className="flex flex-col justify-center items-center mt-25px">
                        <button type="button"
                                className={`h-60px w-60px my-auto flex flex-col justify-center items-center rounded-10px dark:bg-dark_gray`}
                        >
                            {
                                {
                                    "day": <Day status={x.status}/>,
                                    "night": <Night status={x.status}/>,
                                    "outside": <Outside status={x.status}/>,
                                    "inside": <Inside status={x.status}/>,
                                    "add": <Add status={x.status}/>

                                }[x.component]
                            }
                        </button>
                        <h3 className="text-center mt-10px text-light_gray">{x.name}</h3>
                    </div>)}
            </div>
        </div>
        );
};

export default ScenesOverview;
