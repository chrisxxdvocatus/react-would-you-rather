import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect} from 'react-router-dom'


const PrivateRoute = ({ component: Component, authedUser, ...rest }) => (
    <Route {...rest} render={(props) => (
        (authedUser !== undefined && authedUser !== null)
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/LoginPage',
                state: { from: props.location }
                }}
              />
    )} />
);

function mapStateToProps({ authedUser}) {
    return {
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(PrivateRoute);