import React, { useState } from 'react';
import Close from '../../assets/img/svg/closeSceneCreate.svg'
import Star from './icons/Star'
import CategoriesItem from '../Categories/CateforiesItem/CategoriesItem';
import { useDispatch, useSelector } from 'react-redux';

const AddScene = ({ setAddSceneCondition }) => {

    const scenes = useSelector((state) => state.scene.scenes)

    const dispatch = useDispatch()

    const [categoriesComponent, setCategoriesComponent] = useState([]);
    const [roomsComponent, setRoomsComponent] = useState([]);
    const [actionsArr, setActionsArr] = useState([])
    const [conditionArr, setConidtionArr] = useState([])
    const [timeArr, setTimeArr] = useState([])

    const categoriesItem1 = [
        { name: "Lights", component: "LightsDef" },
        { name: "Sound", component: "SoundDef" },
        { name: "Climate control", component: "Climate" },
    ]
    const categoriesItem2 = [
        { name: "TV", component: "TV" },
        { name: "Security", component: "Security" },
        { name: "Add", component: "Add" },
    ]

    const roomsItem1 = [
        { name: "Room 1", component: "Room1" },
        { name: "Room 2", component: "Room2" },
        { name: "Room 3", component: "Room3" },
    ]
    const roomsItem2 = [
        { name: "Room 4", component: "Room4" },
        { name: "Room 5", component: "Room5" },
        { name: "Room 6", component: "Room6" },
    ]

    const actions = [
        {
            id: 0,
            text: 'Turn on'
        },
        {
            id: 1,
            text: 'Lamp 1'
        },
        {
            id: 2,
            text: 'Lamp 3'
        },
        {
            id: 3,
            text: 'Lamp 8'
        },
    ]

    const condition = [{
        id: 0,
        text: 'Entered'
    }]

    const time = [{
        id: 0,
        text: 'Immediately'
    }]

    const handlerSubmit = (event) => {
        event.preventDefault()

        if (event.target.sceneName.value) {
            const scene = {
                id: scenes.length,
                name: event.target.sceneName.value,
                category: categoriesComponent,
                room: roomsComponent,
                actions: actionsArr,
                condition: conditionArr,
                time: timeArr,
            }

            dispatch({ type: 'ADD_SCENE', payload: scene })
        }
    }

    const addCategory = (item) => {
        let tempArr = [...categoriesComponent]
        if (tempArr.filter(x => x.name === item.name).length)
            tempArr = tempArr.filter(x => x.name !== item.name)
        else tempArr.push(item)
        setCategoriesComponent(tempArr)
    }

    const addRoom = (item) => {
        let tempArr = [...roomsComponent]
        if (tempArr.filter(x => x.name === item.name).length)
            tempArr = tempArr.filter(x => x.name !== item.name)
        else tempArr.push(item)
        setRoomsComponent(tempArr)
    }

    const handlerAddActions = (item) => {
        let tempArr = [...actionsArr]
        if (isIcludes(tempArr, item.id)) tempArr = tempArr.filter(x => x.id !== item.id)
        else {
            tempArr.push(item)
        }
        setActionsArr(tempArr)
    }
    const handlerAddCondition = (item) => {
        let tempArr = [...conditionArr]
        if (isIcludes(tempArr, item.id)) tempArr = tempArr.filter(x => x.id !== item.id)
        else {
            tempArr.push(item)
        }
        setConidtionArr(tempArr)
    }
    const handlerAddTime = (item) => {
        let tempArr = [...timeArr]
        if (isIcludes(tempArr, item.id)) tempArr = tempArr.filter(x => x.id !== item.id)
        else {
            tempArr.push(item)
        }
        setTimeArr(tempArr)
    }

    const isIcludes = (arr, id) => {
        return arr.filter(x => x.id === id).length > 0
    }

    return (
        <form onSubmit={handlerSubmit} className='max-h-693px w-335px rounded-25px bg-scenes_item text-light_gray px-28px py-26px overflow-y-auto'>
            <div className='flex justify-between'>
                <h2>New Scene</h2>
                <button onClick={() => setAddSceneCondition(false)} type="button"><img src={Close} /></button>
            </div>
            <div className='flex justify-between'>
                <div className='min-w-60px h-60px bg-light_gray rounded-10px flex justify-center mt-23px'>
                    <div className='my-auto h-27px'><Star /></div>
                </div>
                <input id="sceneName" className='bg-transparent l-20px mt-50px border-b-1px ml-4' placeholder='Name' />
            </div>
            <div className="grid rounded-25px dark:text-white dark:bg-add_dark">
                <h2 className="text-18px mt-20px mb-20px text-light_gray">Category</h2>
                <CategoriesItem isSelected={categoriesComponent} categoriesItem={categoriesItem1} setComponent={addCategory} />
                <CategoriesItem isSelected={categoriesComponent} categoriesItem={categoriesItem2} setComponent={addCategory} />
                <h2 className="text-18px mb-20px text-light_gray">Rooms</h2>
                <CategoriesItem isSelected={roomsComponent} categoriesItem={roomsItem1} setComponent={addRoom} />
                <CategoriesItem isSelected={roomsComponent} categoriesItem={roomsItem2} setComponent={addRoom} />
            </div>
            <div>
                <h2>Functions</h2>
                <p className='my-3'>Actions</p>
                <div className='grid grid-cols-3 gap-x-7 gap-y-4'>
                    {
                        actions.map(x => (
                            <>
                                <label
                                    onClick={() => handlerAddActions(x)}
                                    forHTML={x.text}
                                    className={`${!isIcludes(actionsArr, x.id) ? 'bg-dark_gray' : 'bg-light_gray text-dark_gray'} rounded-10px text-center cursor-pointer`} key={x.id}>
                                    {x.text}
                                </label>
                                <input id={x.text} className='absolute invisible' type="checkbox" />
                            </>
                        ))
                    }
                </div>
                <p className='my-3'>Condition</p>
                <div className='grid grid-cols-3 gap-x-7 gap-y-4'>
                    {
                        condition.map(x =>
                            <>
                                <label
                                    onClick={() => handlerAddCondition(x)}
                                    forHTML={x.text}
                                    className={`${!isIcludes(conditionArr, x.id) ? 'bg-dark_gray' : 'bg-light_gray text-dark_gray'} rounded-10px text-center cursor-pointer`} key={x.id}>
                                    {x.text}
                                </label>
                                <input id={x.text} className='absolute invisible' type="checkbox" />
                            </>
                        )
                    }
                </div>
                <p className='my-3'>Time</p>
                <div className='grid grid-cols-2 gap-x-7 gap-y-4'>
                    {
                        time.map(x =>
                            <>
                                <label
                                    onClick={() => handlerAddTime(x)}
                                    forHTML={x.text}
                                    className={`${!isIcludes(timeArr, x.id) ? 'bg-dark_gray' : 'bg-light_gray text-dark_gray'} rounded-10px text-center cursor-pointer`} key={x.id}>
                                    {x.text}
                                </label>
                                <input id={x.text} className='absolute invisible' type="checkbox" />
                            </>
                        )
                    }
                </div>
                <div className='flex justify-center py-5'>
                    <button type='submit' className='bg-light_gray text-black text-center rounded-25px w-173px'>Add Scene</button>
                </div>
            </div>
        </form>
    );
};

export default AddScene;