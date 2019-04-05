import React from 'react'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setAuthedUser} from "../actions/authedUser";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
    }

    login(e) {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(e.target['user'].value));
        this.props.history.push("/home");
    }

    render() {
        return (
            <div className="login">
                <h1 className="center login-title">Would You Rather App</h1>
                <form className="login-form" onSubmit={this.login}>
                    <label htmlFor="username">Username:</label>
                    <select id="user" name="user" className="select">
                        {this.props.users && Object.values(this.props.users).map(user => {
                            return (<option value={user.id}>{user.name}</option>)
                        })}
                    </select>
                    <button type="submit">Log In</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        users: store.users
    }
}

export default withRouter(connect(mapStateToProps)(Login));