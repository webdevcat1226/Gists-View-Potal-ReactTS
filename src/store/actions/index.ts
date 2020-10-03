export const actionTypes = {
    SET_AUTH: 'SET_AUTH',
    SET_PAGE_NUM: 'SET_PAGE_NUM',
}

export const setAuth = (authResult) => ({
    type: actionTypes.SET_AUTH,
    authResult
})

export const setPageNum = (pageNum) => ({
    type: actionTypes.SET_PAGE_NUM,
    pageNum
})