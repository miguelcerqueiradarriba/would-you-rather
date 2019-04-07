import React from 'react'
import LeaderCard from "./LeaderCard";
import {connect} from "react-redux";

class LeaderList extends React.Component {

    render() {

        const orderedUsers = this.props.users.sort((a, b) => {
            const numQuestionsA = a.questions.length + Object.values(a.answers).length;
            const numQuestionsB = b.questions.length + Object.values(b.answers).length;
            return numQuestionsB - numQuestionsA;
        });

        return (
            <div className="question-list">
                {orderedUsers.map(user => {
                    return (
                        <div key={user.name}>
                            <LeaderCard user={user}/>
                        </div>
                    )
                })}
            </div>
        )
    }

}

function mapStateToProps(store) {
    return {
        users: Object.values(store.users)
    }
}

export default connect(mapStateToProps)(LeaderList);