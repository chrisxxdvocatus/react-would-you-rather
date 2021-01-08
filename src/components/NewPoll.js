import React, { Component } from 'react'
import { handleNewQuestion } from '../actions/questions'
import {connect} from 'react-redux'
import LoginPage from './LoginPage'

class NewPoll extends Component {
    state = {
        optionOne:'',
        optionTwo:''
    }
    handleChange = (e)=>{
        const val = e.target.value
        const name = e.target.name
        this.setState(()=>({
            ...this.state,
            [name]: val})
            //,()=>console.log('newPoll hndleChange',this.state)
            )
        
        
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const {optionOne, optionTwo} = this.state
        //console.log('New Poll', optionOne, optionTwo)
        this.props.dispatch(handleNewQuestion(optionOne, optionTwo))
        this.setState(()=>({
            optionOne:'',
            optionTwo:''
        })
        //,()=>console.log('after newPoll handleSubmit this state', this.state)
        )
        
    }
    render(){
        const {optionOne, optionTwo} = this.state
        console.log('newpoll', this.props)
        return(


<div>


                <h3>Would you rather</h3>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="do this" name='optionOne' value={optionOne} 
                    onChange={this.handleChange} maxLength={200} />
                    or
                    <input placeholder="or this" name='optionTwo' value={optionTwo}
                    onChange={this.handleChange} maxLength={200} />
                    <button type='submit' disabled={(optionOne==='' || optionTwo==='' )}>Submit</button>
                </form>
            

</div>






            
        )
    }
}

function mapStateToProps ({ authedUser }) {
    
    return {
     
      authedUser,
      
    }
  }
export default connect(mapStateToProps)(NewPoll)
  



