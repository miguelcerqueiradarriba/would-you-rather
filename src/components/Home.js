import React, {Fragment} from 'react';
import TopBar from "./TopBar";
import QuestionList from "./QuestionList";

class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <TopBar/>
                <QuestionList/>
            </Fragment>
        )
    }
}

export default Home;