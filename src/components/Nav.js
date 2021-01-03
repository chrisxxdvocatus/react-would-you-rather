import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class Nav extends Component{
    render() {
        return (
        <div className='nav'>
            <ul>
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
                <li>Hello {this.props.authedUser}!</li>
                <li>
                    <NavLink to='/logOut' activeClassName = 'active'>
                    Log Out
                    </NavLink>
                </li>
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