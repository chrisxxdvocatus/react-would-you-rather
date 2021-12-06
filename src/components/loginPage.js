import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAuthedUser } from '../actions/authedUser'
//import {BrowserRouter as Router, Redirect} from 'react-router-dom'

class LoginPage extends Component {
    
    
      state = {
        authed: null
    }

    handleChange = (e) => {
        const setter = e.target.value
        this.setState({authed: setter})

    }

    handleState = () => {
        console.log('login page handleState', this.state)
        this.props.dispatch(updateAuthedUser(this.state.authed))
        
    }
    render(){
        console.log('loginPage', this.props)
        const usr = this.props.usr
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        return(
             <div>
            {!this.props.authedUser
            ?
            <div>
                
                <h3>Log in: </h3>
                <div onClick ={(e)=>this.handleState(e)}><ol>
                {usr.map(x=><li key={x}>
                    <input type="radio" checked={this.state.authed === x} value={x} onChange={this.handleChange} />{x}</li>)}</ol>
                    <button type="submit" >Submit</button>
                </div>

                
            </div>
            :this.props.history.push(from)===LoginPage    
                    ? <div>Logged in already!</div>
                    : this.props.history.push(from)

            
            }
            </div>

            
        )
    }
}

function mapStateToProps ({authedUser, users}){
    let usr=[]
    for (let key in users){
        usr.push(key)
    }
    return{
        authedUser,
        usr
    }
}

export default connect(mapStateToProps)(LoginPage)