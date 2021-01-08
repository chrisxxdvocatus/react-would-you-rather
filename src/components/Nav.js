import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { updateAuthedUser } from '../actions/authedUser'


class Nav extends Component{
    render() {
        console.log('nav',this.props)
        return (
        <div className='nav'>
            <ul>
                {this.props.authedUser==undefined
                ?
                <li>
                    <NavLink to='/LoginPage' activeClassName = 'active'>
                    Log In First
                    </NavLink>
                </li>
                :
                <div>
                <li>
                    <NavLink to='/' exact activeClassName = 'active'>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/NewPoll' activeClassName = 'active'>
                    New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderBoard' activeClassName = 'active'>
                    Leader Board
                    </NavLink>
                </li>
                <li>
                Hello {this.props.authedUser}!
                </li>
                <li>
                    <NavLink to='/LoginPage' activeClassName = 'active' onClick={()=>this.props.dispatch(updateAuthedUser())}>
                    Log Out
                    </NavLink>
                </li>
                </div>
                }
                
            </ul>
        </div>
        )
    }
        
}

function mapStateToProps ({authedUser}){
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(Nav)