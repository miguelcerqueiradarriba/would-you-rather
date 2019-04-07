import {saveQuestion} from '../utils/api'
import {updateUser} from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion(firstText, secondText) {
    return (dispatch, getState) => {
        const {authedUser, users} = getState();

        return saveQuestion({
            optionOneText: firstText,
            optionTwoText: secondText,
            author: authedUser
        }).then((question) => {
            dispatch(addQuestion(question));

            const user = Object.values(users).find(user => user.id === authedUser);
            user.questions.push(question.id);

            dispatch(updateUser(user));
        })
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions: questions,
    }
}