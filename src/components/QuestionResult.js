import React from "react";
import "./QuestionResult.css";
import { withRouter } from "react-router-dom";

const QuestionResult = (props) => {
  const { authorName, authorAvatar, optionOne, optionTwo } = props.question;

  const authedUser = props.authedUser;

  const optionOneVotesCount = optionOne.votes.length;
  const optionTwoVotesCount = optionTwo.votes.length;
  const totalVotes = optionOneVotesCount + optionTwoVotesCount;

  const votedFor = optionOne.votes.includes(authedUser) ? 1 : 2;
  const winnerOption = optionOneVotesCount > optionTwoVotesCount ? 1 : 2;

  const YourVote = () => {
    return <div className="your-vote">&#10003; Your Vote</div>;
  };

  const VotePercentBar = (optionNumber) => {
    const percent = Math.floor(
      ((optionNumber === 1 ? optionOneVotesCount : optionTwoVotesCount) /
        totalVotes) *
        100
    );

    return (
      <div
        style={{
          width: "100%",
          backgroundColor: "#ddd",
          borderRadius: "8px",
          margin: "0.5em",
        }}
      >
        <div
          style={{
            width: percent === 0 ? "10%" : `${percent}%`,
            height: "30px",
            backgroundColor:
              optionNumber === winnerOption ? "#4CAF50" : "rgb(125,125,125)",
            textAlign: "center",
            lineHeight: "30px",
            color: "white",
            borderRadius: "8px",
          }}
        >{`${percent}%`}</div>
      </div>
    );
  };

  return (
    <div className="question-result-container">
      <div className="question-result-author">{`${authorName} asked`}</div>
      <div className="question-result-content">
        <img src={authorAvatar} alt={authorName} />
        <div className="question-result-info">
          <div className="question-result-results-label">Results:</div>
          <div className="question-result-would-label">Would you rather</div>

          <div className="question-result-option">
            {votedFor === 1 ? YourVote() : null}
            <div>{optionOne.text}</div>
            {VotePercentBar(1)}
            <div>{`${optionOneVotesCount} out of ${totalVotes} votes`}</div>
          </div>
          <div className="question-result-option">
            {votedFor === 2 ? YourVote() : null}
            <div>{optionTwo.text}</div>
            {VotePercentBar(2)}
            <div>{`${optionTwoVotesCount} out of ${totalVotes} votes`}</div>
          </div>

          <div className="back-btn" onClick={() => props.history.goBack()}>
            Back
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(QuestionResult);
