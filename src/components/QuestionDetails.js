import React, {Fragment} from 'react';
import TopBar from "./TopBar";
import AnsweredQuestionCard from "./AnsweredQuestionCard";
import UnansweredQuestionCard from "./UnansweredQuestionCard";

class QuestionDetails extends React.Component {
    render() {

        // const user = this.state.users.find(user => this.state.authedUserId === user.id);
        // const question = this.state.questions.find(question => this.props.id === question.id);
        // const userAnswer = user.answers[question.id];

        if (false) {
            return (
                <Fragment>
                    <TopBar/>
                    <div className="question-list">
                        <AnsweredQuestionCard question={{}} answer={{}}/>
                    </div>
                </Fragment>
            )
        }

        return (
            <Fragment>
                <TopBar/>
                <div className="question-list">
                    <UnansweredQuestionCard question={{}}/>
                </div>
            </Fragment>
        )
    }
}

export default QuestionDetails;