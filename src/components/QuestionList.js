import React from 'react'
import TopBar from "./TopBar";
import QuestionCard from "./QuestionCard";
import AnsweredQuestionCard from "./AnsweredQuestionCard";

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
        this.setState({ view: 'unanswered' });
    };

    answeredView = () => {
        this.setState({ view: 'answered' });
    };

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
            }
        ];

        if (this.state.view === 'unanswered') {
            return (
                <div className="question-list">
                    <TopBar leftOptions={options} rightOptions={{}}/>
                    <QuestionCard/>
                </div>
            )
        }

        if (this.state.view === 'answered') {
            return (
                <div className="question-list">
                    <TopBar leftOptions={options} rightOptions={[]}/>
                    <AnsweredQuestionCard/>
                </div>
            )
        }
    }

}

export default QuestionList;