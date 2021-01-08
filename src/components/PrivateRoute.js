import React from 'react'
import { connect } from 'react-redux'

const PrivateRoute = ({component: Component, ...rest} ) => {
    <Route {...rest} render ={(props)=>(
        this.props.authedUser === true
        ? <Component {...props}/>
        : <Redirect to = 'LoginPage'/>
    )} />
}
export default connect()(PrivateRoute)