import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAuthedUser } from '../actions/authedUser'

class loginPage extends Component {
    componentDidMount(){
        this.props.dispatch(updateAuthedUser())
      }

    render(){
        console.log('loginPage', this.props)
        return(
            <div>
                loginPage
                
                
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