export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const UPDATE_AUTHED_USER = 'UPDATE_AUTHED_USER'

export function setAuthedUser(id){
    return {
        type: SET_AUTHED_USER,
        id,
    }
}

export function updateAuthedUser(id){

    return {
        type: UPDATE_AUTHED_USER,
        id,
    }
}

