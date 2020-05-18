import React from "react";
import { Link } from "react-router-dom";
import "./QuestionPreview.css";

const QuestionPreview = (props) => {
  const {
    quesId,
    category,
    author,
    authorName,
    authorAvatar,
    optionOne,
    optionTwo,
  } = props.question;

  return (
    <div className="question-preview-container">
      <div className="question-preview-author">{`${authorName} ${
        category === "unans" ? "asks" : "asked"
      }`}</div>
      <div className="question-preview-content">
        <img src={authorAvatar} alt={authorName} />
        <div className="question-preview-info">
          <div>Would you rather</div>
          <div>{optionOne}</div>
          <div>or</div>
          <div>{optionTwo}</div>
          <Link to={`question/${quesId}`}>
            {category === "unans" ? "Answer" : "View Results"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionPreview;
