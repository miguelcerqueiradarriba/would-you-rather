import React from 'react'

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
                    <button type="submit">Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;