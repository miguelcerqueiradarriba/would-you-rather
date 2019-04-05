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
        if (this.props.questions && this.props.user) {
            return Object.values(this.props.questions).filter(question => {
                return !this.props.user.questions[question.id] && !this.props.user.answers[question.id];
            });
        }
        return {};
    }

    getAnsweredQuestions() {
        if (this.props.questions && this.props.user) {
            return this.props.user.answers && Object.entries(this.props.user.answers).map(answer => {
                return {
                    ...Object.values(this.props.questions).find(question => question.id === answer[0]),
                    optionSelected: answer[1]
                }
            });
        }
        return {};
    }

    getMyQuestions() {
        if (this.props.questions && this.props.user) {
            return Object.values(this.props.questions).filter(question => {
                return this.props.user.questions.includes(question.id);
            });
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
                        return (<QuestionCard question={question}/>)
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
                        return (<AnsweredQuestionCard question={question}/>)
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
                        return (<AnsweredQuestionCard question={question}/>)
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