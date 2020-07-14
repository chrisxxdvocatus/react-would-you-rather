import React, {Component}  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import ListOfPolls from './ListOfPolls'
import PollPage from './PollPage'

class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return(
      <Router>
      <div>
       <Route path='/' exact component = {ListOfPolls} />
       <Route path='/polls/:id' component = {PollPage} />
      </div>
      </Router>

    )
  }
}

export default connect()(App);
