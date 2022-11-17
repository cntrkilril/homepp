import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from './authReducer';
import { sceneReducer } from './sceneReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    scene: sceneReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}