export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USERS = 'UPDATE_USERS'
export const SAVED_AUTHEDUSER_NEWQ = 'SAVED_AUTHEDUSER_NEWQ'

export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function updateUsers ({ authedUser, qid, answer }){
    return {
        type: UPDATE_USERS,
        authedUser,
        qid,
        answer
    }
}

export function saveAuthedNewQ (author, qid){
    return {
        type: SAVED_AUTHEDUSER_NEWQ,
        author,
        qid
    }
}