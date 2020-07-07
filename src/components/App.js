import React, {Component}  from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import ListOfPolls from './ListOfPolls'

class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return(
      <div>
       <ListOfPolls />
      </div>
    )
  }
}

export default connect()(App);
