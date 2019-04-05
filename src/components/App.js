import React, {Component, Fragment} from 'react'
import {Route, Router, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Login from "./Login";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import QuestionDetails from "./QuestionDetails";
import LeaderBoard from "./LeaderBoard";

class App extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Fragment>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/newQuestion" component={NewQuestion}/>
                <Route exact path="/question/:id" component={QuestionDetails}/>
                <Route exact path="/leaderboard" component={LeaderBoard}/>
            </Fragment>
        )
    }
}

export default withRouter(connect()(App))