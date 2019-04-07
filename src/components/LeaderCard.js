import React from 'react';

class LeaderCard extends React.Component {

    render() {
        return (
            <div className="question-card">
                <div className="avatar-container">
                    <img src={this.props.user.avatarURL}/>
                </div>
                <div className="title">
                    <label>
                        <b>{this.props.user.name}</b>
                    </label>
                </div>
                <div className="leader-container">
                    <div className="choices-container">
                        <div className="choice">
                            <p className="choice-text">
                                <b>Questions answered: {Object.values(this.props.user.answers).length}</b>
                            </p>
                        </div>
                        <div className="choice">
                            <p className="choice-text">
                                <b>Questions created: {this.props.user.questions.length}</b>
                            </p>
                        </div>
                    </div>
                    <div className="score">
                        <p className="score-text">
                            <b>{Object.values(this.props.user.answers).length + this.props.user.questions.length}</b>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaderCard;