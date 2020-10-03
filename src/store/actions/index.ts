export const actionTypes = {
    SET_AUTH: 'SET_AUTH'
}

export const setAuth = (authResult) => ({
    type: actionTypes.SET_AUTH,
    authResult
})