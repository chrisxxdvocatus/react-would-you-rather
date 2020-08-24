 import React, { Component } from 'react'
import {connect} from 'react-redux'
import Polls from './Polls'


class ListOfPolls extends Component {
    state={
      show: 'answered',
    }

    handleState = (e) => {
      e.preventDefault();
      let setter = e.target.value;
      this.setState((prev)=>({
        show: setter
      }))
    }
    render(){
        
        const {authedUser, users} = this.props
        console.log('ListOfPolls: ',this.props)
        // console.log('local:', this.state)
        return(
            <div>
                <h3>ListOfPolls</h3>
                <select onChange ={(e)=>this.handleState(e)}>
                  <option value ="answered">Show Answered Questions</option>
                  <option value="unanswered">Show Unanswered Questions</option>
                </select>

               <div>{this.props.questionsIds.map((id)=>(

                      this.state.show==='answered'
                      ? (users[authedUser] && Object.keys(users[authedUser]['answers']).includes(id))
                        &&  
                         <li key ={id}>
                         <Polls id={id} />
                         </li>                        
                      : !(users[authedUser] && Object.keys(users[authedUser]['answers']).includes(id))
                        &&  
                        <li key ={id}>
                        <Polls id={id} />
                        </li>
                    ))}
               </div>
            </div>
        )
    }
}

function mapStateToProps ({ questions, authedUser, users }) {
    
    return {
      questionsIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
      authedUser,
      users,
    }
  }

export default connect(mapStateToProps)(ListOfPolls)