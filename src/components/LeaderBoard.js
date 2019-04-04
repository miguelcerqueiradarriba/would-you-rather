import React, {Fragment} from 'react';
import TopBar from "./TopBar";
import LeaderList from "./LeaderList";

class LeaderBoard extends React.Component {

    render() {
        return (
            <Fragment>
                <TopBar/>
                <LeaderList/>
            </Fragment>
        );
    }
}

export default LeaderBoard;