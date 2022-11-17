import React, { useState } from 'react';
import Lights from "../CategoriesComponents/Lights/Lights"
import Sound from "../CategoriesComponents/Sound/Sound"
import Climate from "../CategoriesComponents/Climate/Climate"
import TV from "../CategoriesComponents/TV/TV"
import Security from "../CategoriesComponents/Security/Security"
import LightsRoom from "../CategoriesComponents/Lights/LightsRoom/LightsRoom"

const ModalWindow = ({ categoriesComponent, setCategoriesComponent }) => {

    const [component, setComponent] = useState("")

    const onLoad = () => {
        switch (categoriesComponent.name) {
            case "Lights":
                setComponent(<Lights
                    categoriesComponent={categoriesComponent}
                    setCategoriesComponent={setCategoriesComponent} closeWindow={closeWindow}/>)
                break;
            case "Sound":
                setComponent(<Sound />)
                break;
            case "Climate":
                setComponent(<Climate />)
                break;
            case "TV":
                setComponent(<TV />)
                break;
            case "Security":
                setComponent(<Security />)
                break;
            case "Room":
                setComponent(<LightsRoom id={categoriesComponent.id} />)
                break;
            default:
                break;
        }
    }

    const closeWindow = (e) => {
        if (e === 'close') {
            setComponent("")
            setCategoriesComponent("");
            return
        }
        if (e.target.className && typeof e.target.className.includes !== 'undefined' && e.target.className.includes("modal-window")) {
            setComponent("")
            setCategoriesComponent("");
        }
    }

    React.useEffect(() => { onLoad() }, [categoriesComponent])

    return (
        <div onClick={(e) => closeWindow(e)} className={`modal-window absolute z-10 left-0 top-0 bg-modal_window w-screen h-screen text-center 
        ${component === '' ? "hidden" : "block"}`}>
            <div className="modal-window flex items-center content-center justify-center overflow-auto h-screen">
                <div className="my-auto flex flex-col">{component}</div>
            </div>
        </div>
    );
};

export default ModalWindow;