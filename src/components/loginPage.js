import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAuthedUser } from '../actions/authedUser'

class loginPage extends Component {
    componentDidMount(){
        this.props.dispatch(updateAuthedUser())
      }
    
      state = {
        authed: ''
    }

    handleChange = (e) => {
        console.log('loginPage local state (after)', this.state)
        const setter = e.target.value
        this.setState({
            authed: e.target.value
        })
        console.log('loginPage local state (after)',this.state)
    }

    handleState = () => {
        console.log('loginPage handleState val checking',this.state)
            //this.props.dispatch(updateAuthedUser(this.state.authed))
    }
    render(){
        console.log('loginPage', this.props)
        const usr = this.props.usr
        return(
            <div>
                
                <h3>Log in: </h3>
                <div onClick ={(e)=>this.handleState(e)}><ol>
                {usr.map(x=><li key={x}>
                    <input type="radio" value={x} onChange={this.handleChange} />{x}</li>)}</ol>
                    <button type="submit" >Submit</button>
                </div>

                
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

export default connect(mapStateToProps)(loginPage)