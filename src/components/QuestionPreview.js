import React from "react";
import "./QuestionPreview.css";

const QuestionPreview = (props) => {
  const {
    quesId,
    category,
    author,
    avatar,
    optionOne,
    optionTwo,
  } = props.question;

  return <h1>QuestionPreview</h1>;
};

export default QuestionPreview;
