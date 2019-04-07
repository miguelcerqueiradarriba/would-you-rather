import React, {Fragment} from 'react';
import TopBar from "./TopBar";
import AnsweredQuestionCard from "./AnsweredQuestionCard";
import UnansweredQuestionCard from "./UnansweredQuestionCard";
import {connect} from "react-redux";
import NotFound from "./NotFound";

class QuestionDetails extends React.Component {
    render() {

        if (this.props.question) {
            const answer = this.props.user && this.props.user.answers[this.props.question.id];

            if (this.props.question) {
                if (answer) {
                    const questionToPrint = {
                        ...this.props.question,
                        optionSelected: answer
                    }
                    return (
                        <Fragment>
                            <TopBar/>
                            <div className="question-list">
                                <AnsweredQuestionCard question={questionToPrint}/>
                            </div>
                        </Fragment>
                    )
                }

                return (
                    <Fragment>
                        <TopBar/>
                        <div className="question-list">
                            <UnansweredQuestionCard question={this.props.question}/>
                        </div>
                    </Fragment>
                )
            }
        }

        return (
            <NotFound/>
        )

    }
}

function mapStateToProps(store, props) {
    return {
        user: Object.values(store.users).find(user => user.id === store.authedUser),
        question: Object.values(store.questions).find(question => question.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(QuestionDetails);