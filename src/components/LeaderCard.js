import React from 'react';

class LeaderCard extends React.Component {

    render() {
        return (
            <div className="question-card">
                <div className="avatar-container"><img
                    src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png"/>
                </div>
                <div className="title"><label><b>Usuario</b></label></div>
                <div className="leader-container">
                    <div className="choices-container">
                        <div className="choice"><p className="choice-text"><b>Questions answered: 10<b></b></b></p>
                        </div>
                        <div className="choice">
                            <p className="choice-text"><b>Questions created: 5<b></b></b></p>
                        </div>
                    </div>
                    <div className="score">
                        <p className="score-text">
                            <b>15</b>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaderCard;