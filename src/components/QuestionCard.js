import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class QuestionCard extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <div className="question-card">
                        <div className="avatar-container">
                            <img alt={this.props.user.name} src={this.props.user.avatarURL}/>
                        </div>
                        <div className="title">
                            <label>
                                <b>{this.props.user.name}</b> says:
                            </label>
                            <label className="subtitle">
                                <b>Would You Rather...?</b>
                            </label>
                        </div>
                        <div className="choices-container">
                            <p>1) {this.props.question.optionOne.text}</p>
                            <p>2) ...</p>
                        </div>
                        <div>
                            <Link to={`/questions/${this.props.question.id}`}>
                                <button className="view-button">
                                    View
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store, props) {
    return {
        user: Object.values(store.users).find(user => user.id === props.question.author)
    }
}

export default connect(mapStateToProps)(QuestionCard);