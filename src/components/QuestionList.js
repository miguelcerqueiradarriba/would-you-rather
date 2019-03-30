import React from 'react'
import QuestionCard from "./QuestionCard";

class QuestionList extends React.Component {

    render() {
        return (
            <div className="question-list">
                <QuestionCard/>
            </div>
        )
    }

}

export default QuestionList;