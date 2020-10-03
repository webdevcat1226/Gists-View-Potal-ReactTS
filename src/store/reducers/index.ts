import {actionTypes} from "../actions";

const initStatus = {
    authResult: JSON.parse(localStorage.authResult || '{}'),
    pageNum: 1
}

export default (store = initStatus, action) => {
    switch (action.type) {
        case actionTypes.SET_AUTH:
            localStorage.authResult = JSON.stringify(action.authResult);
            return {...store, authResult: action.authResult}
        case actionTypes.SET_PAGE_NUM:
            return {...store, pageNum: action.pageNum}
        default:
            return store;
    }
}