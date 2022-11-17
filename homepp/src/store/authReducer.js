const defaultState = {
    auth: localStorage.getItem('status') !== null ? false : true,
}
export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_AUTH": {
            return { ...state, auth: action.auth}
        }
        default:
            return state
    }
};
