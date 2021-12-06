import React, {Component}  from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import ListOfPolls from './ListOfPolls'
import PollPage from './PollPage'
import NewPoll from './NewPoll'
import leaderBoard from './leaderBoard'
import LoginPage from './LoginPage'
import Nav from './Nav'
import Error from './Error'
import PrivateRoute from './PrivateRoute'

class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return(
  <Router>
      <div>
        <Nav />
        <Switch>
       <PrivateRoute path='/' exact component = {ListOfPolls} />
       <Route path='/polls/:id' component = {PollPage} />
       <PrivateRoute path='/NewPoll' component = {NewPoll} />
       <PrivateRoute path='/leaderBoard' component = {leaderBoard} />
       <Route path='/LoginPage' component = {LoginPage} />
       <Route component = {Error} />

        </Switch>
       
      </div>
  </Router>

    )
  }
}

export default connect()(App);
