import { SET_AUTHED_USER, UPDATE_AUTHED_USER } from '../actions/authedUser'

export default function authedUser (state=null, action){
    switch (action.type){
        case SET_AUTHED_USER:
            return action.id
        case UPDATE_AUTHED_USER:
            if (action.id===undefined){
                return null
            } else {
                return action.id
            }
            
        default:
            return state
    }
}