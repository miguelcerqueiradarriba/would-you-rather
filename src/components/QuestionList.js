import React from 'react'
import QuestionCard from "./QuestionCard";
import TopBar from "./TopBar";
import AnsweredQuestionCard from "./AnsweredQuestionCard";
import UnansweredQuestionCard from "./UnansweredQuestionCard";
import NewQuestionCard from "./NewQuestionCard";
import LeaderCard from "./LeaderCard";

class QuestionList extends React.Component {

    render() {
        return (
            <div className="question-list">
                <TopBar/>
                <QuestionCard/>
                <UnansweredQuestionCard/>
                <AnsweredQuestionCard/>
                <NewQuestionCard/>
                <LeaderCard/>
            </div>
        )
    }

}

export default QuestionList;