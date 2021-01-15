import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect} from 'react-router-dom'


const PrivateRoute = ({component: Component, ...rest} ) => (
    
    <Route {...rest} render ={(props)=>(
        props.authedUser === true
        ? <Component {...props}/>
        : <Redirect to ='/LoginPage' />
    )} />
    
)

const mapStateToProps = ({ authedUser }) => ({
    authedUser: authedUser !== null,
  });

export default connect(mapStateToProps)(PrivateRoute)