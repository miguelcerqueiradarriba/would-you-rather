import React from 'react';
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {unsetAuthedUser} from "../actions/authedUser";

class TopBar extends React.Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.dispatch(unsetAuthedUser());
        this.props.history.push("/login");
    }

    optionBar(props) {
        const key = props.option.name;
        const className = props.option.selected ? 'selected' : '';

        if (props.option.path) {
            return (
                <Link key={key} to={props.option.path}>
                    <label className={`pointer ${className}`} onClick={props.option.onClick}>{props.option.name}</label>
                </Link>
            )
        }

        if (props.option.onClick) {
            return (
                <label className={`pointer ${className}`} key={key} onClick={props.option.onClick}>{props.option.name}</label>
            )
        }

        return (
            <label className={className} key={key}>{props.option.name}</label>
        )
    }

    render() {

        const leftOptions = this.props.leftOptions ||
            [
                {name: 'Home', path: '/home', selected: this.props.history.location.pathname === '/home'},
                {name: 'New question', path: '/add', selected: this.props.history.location.pathname === '/newQuestion'},
                {name: 'Leaderboard', path: '/leaderboard', selected: this.props.history.location.pathname === '/leaderboard'},
            ];
        const rightOptions = this.props.rightOptions ||
            [
                {name: this.props.user && this.props.user.name},
                {name: 'Logout', onClick: this.logout}
            ];

        return (
            <div>
                <div className="top-bar">
                    <div className="left-side">
                        {leftOptions.length && leftOptions.map(option => {
                                return this.optionBar({option});
                            }
                        )}
                    </div>
                    <div className="right-side">
                        {rightOptions.length && rightOptions.map(option => {
                                return this.optionBar({option});
                            }
                        )}
                    </div>
                </div>
                <hr className="top-bar-line"/>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        user: Object.values(store.users).find(user => user.id === store.authedUser)
    }
}

export default withRouter(connect(mapStateToProps)(TopBar));