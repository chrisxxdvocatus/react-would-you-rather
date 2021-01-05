import React, { Component } from 'react'
import { handleNewQuestion } from '../actions/questions'

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
            [name]: val}),
            ()=>console.log(this.state))
        
        
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const {optionOne, optionTwo} = this.state
        console.log('New Poll', optionOne, optionTwo)
        this.setState(()=>({
            optionOne:'',
            optionTwo:''
        }))
        this.props.dispatch(handleNewQuestion(this.state.optionOne, this.state.optionTwo))
    }
    render(){
        const {optionOne, optionTwo} = this.state
        return(
            <div>
                <h3>Would you rather</h3>
                <form onSubmit={this.handleSumbit}>
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

export default NewPoll
  