import React, { Component } from 'react'
import {connect} from 'react-redux'

class ListOfPolls extends Component {
    
    render(){
        console.log('ListOfPolls: ',this.props)
        return(
            <div>
               ListOfPolls
            </div>
        )
    }
}



export default connect()(ListOfPolls)