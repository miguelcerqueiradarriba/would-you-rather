import React from 'react';
import {Link} from "react-router-dom";

class QuestionCard extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <div className="question-card">
                        <div className="avatar-container">
                            <img
                                src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png"/>
                        </div>
                        <div className="title">
                            <label>
                                <b>Usuario</b> dice:
                            </label>
                            <label className="subtitle">
                                <b>Would You Rather...?</b>
                            </label>
                        </div>
                        <div className="choices-container">
                            <p>1) Trabajar en un proyecto desarrollado en React.js</p>
                            <p>2) Trabajar en un proyecto desarrollado en Angular.js</p>
                        </div>
                        <div>
                            <Link to="/question/1234">
                                <button className="view-button">
                                    View
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionCard;