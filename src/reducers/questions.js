import { RECEIVE_QUESTIONS, UPDATE_QUESTIONS } from '../actions/questions'

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
                    [optionOne]:{
                        ...state[action.qid][optionOne],
                        votes: action.answer ==='optionOne'
                        ?
                        state[action.qid][optionOne].votes.concat([action.authedUser])
                        :
                        state[action.qid][optionOne].votes

                    }

                }
            }
        default:
            return state
           
    }
}