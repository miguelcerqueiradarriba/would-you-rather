import React from 'react'
import LeaderCard from "./LeaderCard";

class LeaderList extends React.Component {

    render() {
        return (
            <div className="question-list">
                <LeaderCard/>
            </div>
        )
    }

}

export default LeaderList;