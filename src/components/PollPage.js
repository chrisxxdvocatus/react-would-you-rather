import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleUpdateQuestion, UPDATE_QUESTIONS} from '../actions/questions'

class PollPage extends Component {

    state = {
        selected:''
    }
    handleChange = (e) => {
        this.setState({
            selected: e.target.value
        })
    }
    
    handleState = () => {
        

        const {authedUser, id, dispatch} = this.props
        if (this.state.selected !== ''){
            dispatch(handleUpdateQuestion({
                authedUser,
                qid: id, 
                answer: this.state.selected
            }
            ))

        }

    }
    render(){
        console.log('pollpage props', this.props)
        const { 
            askedByName,
            askedByAvatar,
            optionOne,
            votedOptionOne,
            optionTwo,
            votedOptionTwo,
            authedAnswered } = this.props
       
        return(
            <div>
                {authedAnswered==='no'
                ?
                <h5>
                 <p>asked by {askedByName}</p>    
                 <img 
                  src={askedByAvatar} width="30"
                  alt={`Avatar of ${askedByName}`} />
                <p>would you rather</p>
                <div onClick={this.handleState}>
                    <input type="radio" value={"optionOne"} onChange={this.handleChange} name='optionOne' />{optionOne}
                    <input type="radio" value={"optionTwo"} onChange={this.handleChange} name='optionTwo' />{optionTwo}
                    <button type="submit" >Submit</button>
                </div></h5>
                :
                 <h5>
                 <p>asked by {askedByName}</p>    
                 <img 
                  src={askedByAvatar} width="30"
                  alt={`Avatar of ${askedByName}`} />
                  <p>{authedAnswered[1]}</p>
                 <p><strong>Results</strong></p>
                 {authedAnswered[1]==='optionOne'
                 ? <p>{optionOne} [your choice!]</p>
                 : <p>{optionOne}</p>}
                 {parseInt(votedOptionOne)} out of {parseInt(votedOptionOne)+parseInt(votedOptionTwo)} votes
                 {authedAnswered[1]==='optionTwo'
                 ? <p>{optionTwo} [your choice!]</p>
                 : <p>{optionTwo}</p>}
                 {parseInt(votedOptionTwo)} out of {parseInt(votedOptionOne)+parseInt(votedOptionTwo)} votes</h5>
            }
                
               
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions},props){
    const id = props.match.params.id
    const thisQuestion = questions[id]
    const askedByUser = thisQuestion['author']
    const askedByName = users[askedByUser]['name']
    const askedByAvatar = users[askedByUser]['avatarURL']
    const optionOne = thisQuestion.optionOne.text
    let votedOptionOne = thisQuestion.optionOne.votes.length
    const optionTwo = thisQuestion.optionTwo.text
    let votedOptionTwo = thisQuestion.optionTwo.votes.length
    let authedAnswered = 'no'
    if (!!thisQuestion && users[authedUser] && Object.keys(users[authedUser]['answers']).includes(id)){
        authedAnswered = ['yes', users[authedUser]['answers'][id]]
    }
    return{
        authedUser,
        users,
        questions,
        id,
        thisQuestion,
        askedByName,
        askedByAvatar,
        optionOne,
        votedOptionOne,
        optionTwo,
        votedOptionTwo,
        authedAnswered, 
    }
}


    export default connect(mapStateToProps)(PollPage)