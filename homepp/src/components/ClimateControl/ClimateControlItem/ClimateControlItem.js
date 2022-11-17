import React from 'react';
import AirMobilityIcon from "../ClimateControlcons/AirMobilityIcon";
import SmokeDetectionIcon from "../ClimateControlcons/SmokeDetectionIcon";
import OdorsIcon from "../ClimateControlcons/OdorsIcon";

const ClimateControlItem = (props) => {
    return (
        <div className='cursor-pointer flex flex-col items-center h-150px'>
            <div className={'w-75px h-75px rounded-full border-3px border-' + props.item.color}>
                    <div className='flex justify-center items-center h-full'>
                        {
                            !props.item.svg &&
                                <p className='font-roboto'>{props.item.content}</p>
                        }
                        {
                            props.item.svg &&
                                {
                                    'air_mobility_svg': <AirMobilityIcon/>,
                                    'smoke_detection_svg': <SmokeDetectionIcon/>,
                                    'odors_svg': <OdorsIcon/>
                                }[props.item.content]

                        }
                    </div>
            </div>
            <h3 className="w-87px text-center">{props.item.name}</h3>
        </div>
    );
};

export default ClimateControlItem;
