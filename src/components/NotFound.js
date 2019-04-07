import React from "react";
import {Link, withRouter} from "react-router-dom";

class NotFound extends React.Component {

    render() {
        return (
            <div className="not-found-container">
                <label className="number">
                    404
                </label>
                <label>
                    The page you requested could not be found.
                </label>
                <label>
                    Click <Link to={"/home"}><label className="link">here</label></Link> to go back to home.
                </label>
            </div>
        )
    }
}

export default withRouter(NotFound);