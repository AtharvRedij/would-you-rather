import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderboardItem from "../components/LeaderboardItem";

class Leaderboard extends Component {
  render() {
    const { users } = this.props;

    return (
      <div>
        {users.map((user, index) => (
          <LeaderboardItem key={index} rank={index + 1} user={user} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const usersList = [];

  Object.keys(users).forEach((id) => {
    const user = users[id];
    usersList.push({
      name: user.name,
      avatarURL: user.avatarURL,
      answeredQuestions: Object.keys(user.answers).length,
      createdQuestions: user.questions.length,
      score: Object.keys(user.answers).length + user.questions.length,
    });
  });

  return {
    users: usersList
      .sort((user1, user2) => user2.score - user1.score)
      .slice(0, 3),
  };
};

export default connect(mapStateToProps)(Leaderboard);
