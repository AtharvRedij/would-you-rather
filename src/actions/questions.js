import { showLoading, hideLoading } from "react-redux-loading";
import { saveQuestion, saveAnswer } from "../utils/API";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

export const handleAddQuestion = (optionOne, optionTwo) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      author: authedUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
};

const addAnswer = (answer) => {
  return {
    type: ADD_ANSWER,
    answer,
  };
};

export const handleAddAnswer = (authedUser, qid, answer) => {
  return (dispatch) => {
    const answerObj = { authedUser, qid, answer };
    dispatch(showLoading());

    return saveAnswer(answerObj)
      .then(() => dispatch(addAnswer(answerObj)))
      .then(() => dispatch(hideLoading()));
  };
};
