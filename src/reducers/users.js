import { RECEIVE_USERS, UPDATE_USERS,SAVED_AUTHEDUSER_NEWQ } from '../actions/users'


export default function users(state ={}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return{
                 ...state,
            ...action.users
            }

        case UPDATE_USERS:
            return{
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    answers:{
                        ...state[action.authedUser].answers,
                        [action.qid]:action.answer
                    }
                }
            }
        case SAVED_AUTHEDUSER_NEWQ:
            return{
                 ...state,
                 [action.author]:{
                     ...state[author],
                     questions: 
                     state[author].questions.concat(qid)
                 }
            }

        default:
            return state
           
    }
}