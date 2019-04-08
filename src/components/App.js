import React, {Component, Fragment} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Login from "./Login";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import QuestionDetails from "./QuestionDetails";
import LeaderBoard from "./LeaderBoard";
import NotFound from "./NotFound";

class App extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(handleInitialData())
    }

    render() {

        if (!this.props.authedUser && this.props.location.pathname !== '/login') {
            return(
                <Login requestedPath={this.props.location.pathname}/>
            )
        }

        return (
            <Fragment>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/add" component={NewQuestion}/>
                    <Route exact path="/questions/:id" component={QuestionDetails}/>
                    <Route exact path="/leaderboard" component={LeaderBoard}/>
                    <Route exact path="*" component={NotFound} />
                </Switch>
            </Fragment>
        )
    }
}

function mapStateToProps(store) {
    return {
        authedUser: store.authedUser
    }
}

export default withRouter(connect(mapStateToProps)(App))