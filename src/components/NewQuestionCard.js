import React from 'react'
import {withRouter} from "react-router-dom";

class NewQuestionCard extends React.Component {

    constructor(props) {
        super(props);

        this.submitNewQuestion = this.submitNewQuestion.bind(this);
    }

    submitNewQuestion(e) {
        e.preventDefault();

        const data = {
            firstOption: e.target['first-choice'].value,
            secondOption: e.target['second-choice'].value
        };

        //Do redux

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

export default withRouter(NewQuestionCard);