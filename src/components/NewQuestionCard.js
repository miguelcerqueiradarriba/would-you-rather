import React from 'react'

class NewQuestionCard extends React.Component {

    render() {
        return (
            <div className="question-card">
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
                    <button className="view-button">Submit</button>
                </div>
            </div>
        )
    }
}

export default NewQuestionCard;