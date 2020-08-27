import {saveQuestionAnswer} from '../utils/api.js'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS'

export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function updateQuestions ({ authedUser, qid, answer }){
    return {
        type: UPDATE_QUESTIONS,
        authedUser,
        qid,
        answer
    }
}

export function handleUpdateQuestion (info){
    return (dispatch)=>{
        dispatch(updateQuestions(info))

        return saveQuestionAnswer(info)
         .catch((e)=>{
             console.warn('Error in handleUpdateQuestion: ', e)
         })
    }
}