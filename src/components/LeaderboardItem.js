import React from "react";
import "./LeaderboardItem.css";

const LeaderboardItem = ({ user, rank }) => {
  const { name, avatarURL, answeredQuestions, createdQuestions, score } = user;

  return (
    <div className="leaderboard-item-container">
      <img
        style={{
          marginBottom: "auto",
          marginTop: "0.3em",
          marginLeft: "0.3em",
          marginRight: "0",
          width: "35px",
          height: "35px",
        }}
        src={
          rank === 1
            ? "https://img.icons8.com/office/40/000000/gold-medal.png"
            : rank === 2
            ? "https://img.icons8.com/office/40/000000/olympic-medal-silver.png"
            : "https://img.icons8.com/office/40/000000/olympic-medal-bronze.png"
        }
        alt={name}
      />

      <img src={avatarURL} alt={name} />
      <div className="leaderboard-item-info">
        <div>{name}</div>
        <div>{`Answered questions     ${answeredQuestions}`}</div>
        <div>{`Created questions        ${createdQuestions}`}</div>
      </div>
      <div className="leaderboard-item-score-container">
        <div>Score</div>
        <div>{score}</div>
      </div>
    </div>
  );
};

export default LeaderboardItem;
