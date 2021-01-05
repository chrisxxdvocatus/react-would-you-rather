import { RECEIVE_QUESTIONS, UPDATE_QUESTIONS, ADD_QUESTION } from '../actions/questions'

export default function questions(state ={}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return{
                 ...state,
            ...action.questions
            }
        case UPDATE_QUESTIONS:
            return{
                ...state,
                [action.qid]:{
                    ...state[action.qid],
                    [action.answer]:{
                        ...state[action.answer],
                        votes: 
                        state[action.qid][action.answer].votes.concat([action.authedUser])

                    }

                }
            }
         case ADD_QUESTION:
             return{
                 ...state,
                 [action.question.id]: action.question
             }   
        default:
            return state
           
    }
}