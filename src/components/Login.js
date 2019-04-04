import React from 'react'
import {Link} from "react-router-dom";

class Login extends React.Component {

    render() {
        return (
            <div className="login">
                <h1 className="center login-title">Would You Rather App</h1>
                <form className="login-form">
                    <label htmlFor="username">Username:</label>
                    <select id="username" name="username" className="select">
                        <option>Fulanito</option>
                        <option>Menganito</option>
                    </select>
                    <Link to='/home'>
                        <button type="submit">Log In</button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default Login;