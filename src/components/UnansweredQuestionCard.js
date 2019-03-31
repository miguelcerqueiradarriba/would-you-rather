import React from 'react';

class UnansweredQuestionCard extends React.Component {

    render() {
        return (
            <div className="question-card">
                <div className="avatar-container"><img
                    src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png"/>
                </div>
                <div className="title"><label><b>Usuario</b> dice:</label><label className="subtitle"><b>Would You
                    Rather...?</b></label></div>
                <div className="choices-container">
                    <div className="choice selected pointer">
                        <div>
                            <p className="choice-text">
                                Trabajar en un proyecto desarrollado en React.js
                            </p>
                        </div>
                    </div>
                    <div className="choice selected pointer">
                        <div>
                            <p className="choice-text">
                                Trabajar en un proyecto desarrollado en Angular.js
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UnansweredQuestionCard;