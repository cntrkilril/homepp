import React from 'react';
import Lights from "../Icons/Lights";
import TV from "../Icons/TV";
import Intercom from "../Icons/Intercom";
import Sound from "../Icons/Sound";
import RoomOne from "../Icons/RoomOne";
import RoomTwo from "../Icons/RoomTwo";
import RoomThree from "../Icons/RoomThree";
import RoomFour from "../Icons/RoomFour";
import Add from '../Icons/Add';
import Climate from '../Icons/Climate';
import Security from '../Icons/Security';
import LightsDefault from './../Icons/LightsDefault';
import SoundDefault from './../Icons/SoundDefault';

const CategoriesItem = ({categoriesItem, setComponent, isSelected }) => {

    return (
        <div className="flex items-center justify-between">
            {categoriesItem.map((x) =>
                <div key={x.name} className="flex flex-col h-124px">
                    <button type="button" onClick={() => setComponent({ name: x.component })}
                         className={`h-60px w-60px flex flex-col justify-center items-center rounded-10px
                         ${isSelected?.filter(component => component.name === x.component).length ? 'dark:bg-light_gray selected' : 'dark:bg-dark_gray'}`}
                    >
                        {
                            
                            {
                                'Lights': <Lights/>,
                                'LightsDef': <LightsDefault/>,
                                'TV': <TV/>,
                                'Intercom': <Intercom/>,
                                'Climate': <Climate/>,
                                'Sound': <Sound/>,
                                'SoundDef': <SoundDefault/>,
                                'Add': <Add/>,
                                'Security': <Security/>,
                                'Room1': <RoomOne/>,
                                'Room2': <RoomTwo/>,
                                'Room3': <RoomThree/>,
                                'Room4': <RoomFour/>,
                            }[x.component]
                        }
                    </button>
                    <h3 className={
                                    {
                                        'Lights': "text-center mt-10px",
                                        'TV': "text-center mt-10px text-light_gray",
                                        'Intercom': "text-center mt-10px text-light_gray",
                                        'Sound': "text-center mt-10px",
                                        'Climate': "text-center mt-10px w-50px",

                                    }[x.component] || "text-center mt-10px text-light_gray"
                                }
                    >{x.name}</h3>
                </div>)}
        </div>
    );
};

export default CategoriesItem;