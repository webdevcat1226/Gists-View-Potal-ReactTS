import {actionTypes} from "../actions";

const initStatus = {
    authResult: JSON.parse(localStorage.authResult || '{}')
}

export default (store = initStatus, action) => {
    switch (action.type) {
        case actionTypes.SET_AUTH:
            localStorage.authResult = JSON.stringify(action.authResult);
            return {...store, authResult: action.authResult}
        default:
            return store;
    }
}