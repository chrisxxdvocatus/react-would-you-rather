import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginPage from './LoginPage'

class leaderBoard extends Component {


    render(){
        console.log('leaderBoard',this.props)
        const leaderArray = this.props.leaderArray
        return(
            
            <div>
                {this.props.authedUser !== null
                ? 
                <div>
                leaderBoard
                {leaderArray.map(x=><li key={x[0]}>
                    <h4>{x[0]}</h4>
                    <p>answered:{x[2]} asked: {x[3]} </p>
                    <h5>total score: {x[1]}</h5></li>)}
                </div>
                :
                <LoginPage />
                }
            </div>
        )
    }
}

function mapStateToProps ({users}){
    let leaderObj={}
    for (let [key, value] of Object.entries(users)){
        leaderObj[key]={
            score: Object.keys(value.answers).length+value.questions.length,
            answered: Object.keys(value.answers).length, asked: value.questions.length}
    }
    let leaderArray=[]
    for (let [key, value] of Object.entries(users)){
        leaderArray.push([key, Object.keys(value.answers).length+value.questions.length, Object.keys(value.answers).length, value.questions.length ])
        leaderArray.sort((a,b)=>b[1]-a[1])
    }
    return{
        users,
        leaderObj,
        leaderArray
    }
}

export default connect(mapStateToProps)(leaderBoard)