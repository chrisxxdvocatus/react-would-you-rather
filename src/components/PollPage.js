import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollPage extends Component {
    render(){
        console.log('PollPage: ',this.props)
        
        return(
            <div>
                PollPage
                
               
            </div>
        )
    }
}

// function mapStateToProps ({authedUser, users, questions},{id}){
//     const thisQuestion = questions[id]
//     const askedByUser = users[thisQuestion.author]
//     const askedByName = askedByUser['name']
//     const askedByAvatar = askedByUser['avatarURL']
//     const optionOne = thisQuestion.optionOne.text
//     let votedOptionOne = thisQuestion.optionOne.votes.length
//     const optionTwo = thisQuestion.optionTwo.text
//     let votedOptionTwo = thisQuestion.optionTwo.votes.length
//     let authedAnswered = 'no'
//     if (users[authedUser] && Object.keys(users[authedUser]['answers']).includes(id)){
//         authedAnswered = ['yes', users[authedUser]['answers'][id]]
//     }
//     return{
//         askedByName,
//         askedByAvatar,
//         optionOne,
//         votedOptionOne,
//         optionTwo,
//         votedOptionTwo,
//         authedAnswered,
//     }
// }

export default connect()(PollPage)