const defaultState = {
    scenes: []
}
export const sceneReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_SCENE": {
            let tempArr = [...state.scenes]
            tempArr.push(action.payload)
            return { ...state, scenes: tempArr }
        }
        default:
            return state
    }
};
