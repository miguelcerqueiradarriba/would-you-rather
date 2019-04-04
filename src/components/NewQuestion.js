import React, {Fragment} from 'react';
import TopBar from "./TopBar";
import NewQuestionCard from "./NewQuestionCard";

class NewQuestion extends React.Component {

    render() {
        return (
            <Fragment>
                <TopBar/>
                <div className="question-list">
                    <NewQuestionCard/>
                </div>
            </Fragment>
        )
    }
}

export default NewQuestion;