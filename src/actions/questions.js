import {saveQuestion, saveQuestionAnswer} from '../utils/api.js'
import {updateUsers} from './users'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

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

function saveNewQuestion ({question}){
    return{
        type: ADD_QUESTION,
        question
    }
}

export function handleNewQuestion(optionOneText, optionTwoText){
    return (dispatch, getState) =>{
        const {authedUser} = getState()
        console.log('handlenewQ',getState())
console.log('handlenewQ',optionOneText, optionTwoText, authedUser)
        return saveQuestion ({optionOneText, optionTwoText, author: authedUser})
        .then((question)=>dispatch(saveNewQuestion(question)))
    }
}

export function handleUpdateQuestion (info){
    return (dispatch)=>{
        dispatch(updateQuestions(info))
        dispatch(updateUsers(info))

        return saveQuestionAnswer(info)
         .catch((e)=>{
             console.warn('Error in handleUpdateQuestion: ', e)
         })
    }
}