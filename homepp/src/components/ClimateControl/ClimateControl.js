import React from 'react';
import SmokeDetectionIcon from "./ClimateControlcons/SmokeDetectionIcon";
import AirMobilityIcon from "./ClimateControlcons/AirMobilityIcon";
import OdorsIcon from "./ClimateControlcons/OdorsIcon";


const ClimateControl = () => {

    const items = [
        {
            name: 'Temp',
            content: '8°C',
        },
        {
            name: 'Air mobility',
            svg: true,
        },
        {
            name: 'Humidity',
            content: '50%',
        },
        {
            name: 'Odors',
            svg: true,
        },
        {
            name: 'C02',
            content: '2500',
        },
        {
            name: 'Pressure',
            content: '963',
        },
        {
            name: 'Dust, mg/m³',
            content: '0,15',
        },
        {
            name: 'Smoke',
            svg: true,
        },
    ]

    return (
        <div className="shadow-xl grid h-380px px-39px rounded-25px dark:text-white shadow-xl dark:bg-add_dark pb-44px">
            <p className="text-18px mt-20px mb-20px">Climate control</p>
            <div className="flex flex-wrap gap-y-30px items-center">
                {items.map((x) =>
                    <div key={x.name} className="flex flex-col justify-center items-center min-w-25%">
                        <button className={`h-60px w-60px my-auto flex flex-col justify-center items-center rounded-10px dark:bg-dark_gray`}>
                            {
                                x.svg
                                ?
                                    {
                                        'Smoke': <SmokeDetectionIcon/>,
                                        'Air mobility': <AirMobilityIcon/>,
                                        'Odors': <OdorsIcon/>
                                    }[x.name]
                                :
                                    <p className='text-24px text-light_gray'>{x.content}</p>
                            }
                        </button>
                        <h3 className="text-center mt-10px text-light_gray">{x.name}</h3>
                    </div>)}
            </div>
        </div>
    );
};

export default ClimateControl;
