import React, { Component } from 'react'
import {connect} from 'react-redux'
import Polls from './Polls'

class ListOfPolls extends Component {
    
    render(){
        console.log('ListOfPolls: ',this.props)

        return(
            <div>
                <h3>ListOfPolls</h3>
               <div>{this.props.questionsIds.map((id)=>(
                    <li key ={id}>
                        <Polls id={id} />
                    </li>
                    ))}
               </div>
            </div>
        )
    }
}

function mapStateToProps ({ questions }) {
    
    return {
      questionsIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
  }

export default connect(mapStateToProps)(ListOfPolls)