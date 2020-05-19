import { RECEIVE_USERS } from "./../actions/users";
import { ADD_QUESTION, ADD_ANSWER } from "../actions/questions";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: [
            ...state[action.question.author].questions,
            action.question.id,
          ],
        },
      };

    case ADD_ANSWER:
      const { authedUser, qid, answer } = action.answer;

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };

    default:
      return state;
  }
};

export default users;
