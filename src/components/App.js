import React, {Component}  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import ListOfPolls from './ListOfPolls'
import PollPage from './PollPage'
import NewPoll from './NewPoll'
import leaderBoard from './leaderBoard'
import loginPage from './loginPage'
import Nav from './Nav'

class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return(
      

<Router>

  
      <div>
        <Nav />
       <Route path='/' exact component = {ListOfPolls} />
       <Route path='/polls/:id' component = {PollPage} />
       <Route path='/NewPoll' component = {NewPoll} />
       <Route path='/leaderBoard' component = {leaderBoard} />
       <Route path='/loginPage' component = {loginPage} />
      </div>
      </Router>

    )
  }
}

export default connect()(App);
