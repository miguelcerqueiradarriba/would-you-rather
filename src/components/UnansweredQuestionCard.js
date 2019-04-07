import React from 'react';
import {connect} from "react-redux";
import {updateUser} from "../actions/users";
import {withRouter} from "react-router-dom";

class UnansweredQuestionCard extends React.Component {

    constructor(props) {
        super(props);

        this.submitFirstChoice = this.submitFirstChoice.bind(this);
        this.submitSecondChoice = this.submitSecondChoice.bind(this);
    }

    submitFirstChoice() {
        this.props.user.answers[this.props.question.id] = 'optionOne';

        this.props.dispatch(
            updateUser(this.props.user)
        );

        this.props.history.push(`/questions/${this.props.question.id}`)
    }

    submitSecondChoice() {
        this.props.user.answers[this.props.question.id] = 'optionTwo';

        this.props.dispatch(
            updateUser(this.props.user)
        );

        this.props.history.push(`/questions/${this.props.question.id}`)
    }

    render() {
        return (
            <div className="question-card">
                <div className="avatar-container">
                    <img src={this.props.questionUser && this.props.questionUser.avatarURL}/>
                </div>
                <div className="title">
                    <label>
                        <b>{this.props.questionUser && this.props.questionUser.name}</b> dice:
                    </label>
                    <label className="subtitle">
                        <b>Would You Rather...?</b>
                    </label>
                </div>
                <div className="choices-container">
                    <div className="choice unanswered pointer" onClick={this.submitFirstChoice}>
                        <div>
                            <p className="choice-text">
                                {this.props.question.optionOne.text}
                            </p>
                        </div>
                    </div>
                    <div className="choice unanswered pointer" onClick={this.submitSecondChoice}>
                        <div>
                            <p className="choice-text">
                                {this.props.question.optionTwo.text}
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
        questionUser: Object.values(store.users).find(user => user.id === props.question.author),
        user: Object.values(store.users).find(user => user.id === store.authedUser)
    }
}

export default withRouter(connect(mapStateToProps)(UnansweredQuestionCard));