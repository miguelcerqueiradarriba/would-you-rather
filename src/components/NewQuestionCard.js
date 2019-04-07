import React from 'react'
import {withRouter} from "react-router-dom";
import {handleAddQuestion} from "../actions/questions";
import {connect} from "react-redux";

class NewQuestionCard extends React.Component {

    constructor(props) {
        super(props);

        this.submitNewQuestion = this.submitNewQuestion.bind(this);
    }

    submitNewQuestion(e) {
        e.preventDefault();

        this.props.dispatch(handleAddQuestion(
            e.target['first-choice'].value,
            e.target['second-choice'].value
        ));

        this.props.history.push("/home");
    }

    render() {
        return (
            <div className="question-card">
                <form onSubmit={this.submitNewQuestion}>
                    <div className="new-question-title">
                        <label>
                            <b>Create new question</b>
                        </label>
                        <label className="subtitle">
                            <b>Would You Rather...?</b>
                        </label>
                    </div>
                    <div className="choices-container">
                        <div>
                            <input type="text" name="first-choice" className="choice-input"/>
                            <p className="choice-separator">OR</p>
                            <input type="text" name="second-choice" className="choice-input"/>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="view-button">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        user: Object.values(store.users).find(user => user.id === store.authedUser)
    }
}

export default withRouter(connect(mapStateToProps)(NewQuestionCard));