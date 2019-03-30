import React from 'react';

class TopBar extends React.Component {

    render() {
        return (
            <div>
                <div className="top-bar">
                    <div className="left-side">
                        <label>Primera</label>
                        <label>Segunda</label>
                        <label>Tercera</label>
                    </div>
                    <div className="right-side">
                        <label>Cuarta</label>
                        <label>Quinta</label>
                    </div>
                </div>
                <hr className="top-bar-line"/>
            </div>
        )
    }
}

export default TopBar;