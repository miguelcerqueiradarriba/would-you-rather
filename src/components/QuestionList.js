import React from 'react'
import TopBar from "./TopBar";
import QuestionCard from "./QuestionCard";
import AnsweredQuestionCard from "./AnsweredQuestionCard";
import {connect} from "react-redux";

class QuestionList extends React.Component {

    state = {
        view: 'unanswered'
    };

    constructor(props) {
        super(props);

        this.unansweredView = this.unansweredView.bind(this);
        this.answeredView = this.answeredView.bind(this);
    }

    unansweredView = () => {
        this.setState({view: 'unanswered'});
    };

    answeredView = () => {
        this.setState({view: 'answered'});
    };

    myView = () => {
        this.setState({view: 'my'});
    };

    getUnansweredQuestions() {
        const { user, questions } =this.props;

        if (questions && user) {
            return Object.values(questions).filter(question => {
                return !user.questions.find(userQuestion => userQuestion === question.id)
                    && !user.answers[question.id];
            }).sort((a, b) => b.timestamp - a.timestamp);
        }
        return {};
    }

    getAnsweredQuestions() {
        const { user, questions } =this.props;

        if (questions && user) {
            return user.answers && Object.entries(user.answers).map(answer => {
                return {
                    ...Object.values(questions).find(question => question.id === answer[0]),
                    optionSelected: answer[1]
                }
            }).sort((a, b) => b.timestamp - a.timestamp);
        }
        return {};
    }

    getMyQuestions() {
        const { user, questions } =this.props;

        if (questions && user) {
            return Object.values(questions).filter(question => {
                return user.questions.includes(question.id);
            }).sort((a, b) => b.timestamp - a.timestamp);
        }
        return {};
    }

    render() {

        const options = [
            {
                name: 'Unanswered',
                onClick: this.unansweredView,
                selected: Boolean(this.state.view === 'unanswered')
            },
            {
                name: 'Answered',
                onClick: this.answeredView,
                selected: Boolean(this.state.view === 'answered')
            },
            {
                name: 'My questions',
                onClick: this.myView,
                selected: Boolean(this.state.view === 'my')
            }
        ];

        if (this.state.view === 'unanswered') {
            const questions = this.getUnansweredQuestions();
            return (
                <div className="question-list">
                    <TopBar leftOptions={options} rightOptions={{}}/>
                    {questions && Object.values(questions).map(question => {
                        return (
                            <div key={question.id}>
                                <QuestionCard question={question}/>
                            </div>
                        )
                    })}
                </div>
            )
        }

        if (this.state.view === 'answered') {
            const questions = this.getAnsweredQuestions();
            return (
                <div className="question-list">
                    <TopBar leftOptions={options} rightOptions={{}}/>
                    {questions && Object.values(questions).map(question => {
                        return (
                            <div key={question.id}>
                                <AnsweredQuestionCard question={question}/>
                            </div>
                        )
                    })}
                </div>
            )
        }

        if (this.state.view === 'my') {
            const questions = this.getMyQuestions();
            return (
                <div className="question-list">
                    <TopBar leftOptions={options} rightOptions={{}}/>
                    {questions && Object.values(questions).map(question => {
                        return (
                            <div key={question.id}>
                                <AnsweredQuestionCard question={question}/>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}

function mapStateToProps(store) {
    return {
        questions: store.questions,
        user: store.users[store.authedUser]
    }
}

export default connect(mapStateToProps)(QuestionList);