import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from './questions'


export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, tweets: questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
      })
  }
}