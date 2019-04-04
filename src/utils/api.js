import {
    _getUsers,
    _getQuestions,
    _saveQuestion
} from './_DATA.js'

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, tweets]) => ({
        users,
        tweets,
    }))
}

export function saveQuestion(question) {
    return _saveQuestion(question);
}