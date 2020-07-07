 import {getInitialData} from '../utils/api'
 import {receiveQuestions} from '../actions/questions'
 import {receiveUsers} from '../actions/users'
 import {setAuthedUser} from '../actions/authedUser'

const TEMP_AUTHED_ID = 'johndoe'

 export function handleInitialData () {
     return (dispatch) => {
         return getInitialData()
         .then(({users, questions})=>{
           dispatch(receiveQuestions(questions))
           dispatch(receiveUsers(users))
           dispatch(setAuthedUser(TEMP_AUTHED_ID))
         })
     }
 }