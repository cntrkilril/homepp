import React, { useEffect, useState } from 'react';
import SceneItem from './SceneItem';

import addScene from '../../assets/img/svg/addScene.svg'
import AddScene from './AddScene';
import { useSelector } from 'react-redux';

const Scenes = () => {

    const scenes = useSelector((state) => state.scene.scenes)

    const [selectedScene, setSelectedScene] = useState('all')

    const [addSceneCondition, setAddSceneCondition] = useState(false)

    const [filterScenes, setFilterScenes] = useState(scenes)

    useEffect(() => {
        setFilterScenes(scenes)
    }, [scenes])

    const filterScene = (e) => {
        setFilterScenes(scenes.filter(x => x.id === scenes.filter((y) => y.name === e.target.value)[0].id))
    }

    return (
        <div className='text-white flex justify-between'>
            <div>
                {scenes.length > 0
                    &&
                    <select onChange={filterScene} className='bg-scenes_item rounded-25px h-40px w-217px px-10'>
                        {scenes.map(x =>
                            <option className='border-0'>
                                {x.name}
                            </option>
                        )}
                    </select>}
                <div className={`grid grid-cols-${addSceneCondition ? '3' : '4'} grid-rows-3 mt-40px gap-20px`}>
                    {selectedScene === 'all' ?
                        filterScenes.map(x =>
                            <SceneItem key={x.id} data={x} />
                        )
                        :
                        <SceneItem data={scenes.filter(x => x.id === selectedScene)[0]} />
                    }
                </div>
            </div>
            <div>
                {
                    !addSceneCondition
                        ?
                        <button
                            onClick={() => setAddSceneCondition(true)}
                            className='bg-scenes_item rounded-25px h-40px w-217px px-10 flex'>
                            <img className='my-auto h-14px' src={addScene} />
                            <span className='mx-auto my-auto'>Create Scene</span>
                        </button>
                        :
                        <AddScene setAddSceneCondition={setAddSceneCondition} />
                }
            </div>
        </div>
    );
};

export default Scenes;