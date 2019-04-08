import React from 'react'
import {connect} from "react-redux";

class AnsweredQuestionCard extends React.Component {

    render() {

        const answers = this.props.users.map(user => {
            return user.answers[this.props.question.id];
        }).filter(option => option !== undefined);

        const numberOfOne = answers.filter(answer => answer === 'optionOne').length;
        const numberOfTwo = answers.filter(answer => answer === 'optionTwo').length;

        const percentageOne = numberOfOne * 100 / (answers.length);
        const percentageTwo = numberOfTwo * 100 / (answers.length);

        return (
            <div className="question-card">
                <div className="avatar-container">
                    <img alt={this.props.user.name} src={this.props.user.avatarURL}/>
                </div>
                <div className="title">
                    <label>
                        <b>{this.props.user.name}</b> says:
                    </label>
                    <label className="subtitle">
                        <b>Would You Rather...?</b>
                    </label>
                </div>
                <div className="choices-container">
                    <div className={`choice ${this.props.question.optionSelected === 'optionOne' ? 'selected' : ''}`}>
                        <div className="percentage">
                            <p className="percentage-text">
                                <b>{Number.isNaN(percentageOne) ? 0 : Math.round(percentageOne * 100) / 100}%</b>
                            </p>
                        </div>
                        <div>
                            <p className="choice-text">
                                {this.props.question.optionOne.text} <b>{numberOfOne}/{answers.length} votes</b>
                            </p>
                        </div>
                    </div>
                    <div className={`choice ${this.props.question.optionSelected === 'optionTwo' ? 'selected' : ''}`}>
                        <div className="percentage">
                            <p className="percentage-text">
                                <b>{Number.isNaN(percentageTwo) ? 0 : Math.round(percentageTwo * 100) / 100}%</b>
                            </p>
                        </div>
                        <div>
                            <p className="choice-text">
                                {this.props.question.optionTwo.text} <b>{numberOfTwo}/{answers.length} votes</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store, props) {
    return {
        users: Object.values(store.users),
        user: Object.values(store.users).find(user => user.id === props.question.author)
    }
}

export default connect(mapStateToProps)(AnsweredQuestionCard);