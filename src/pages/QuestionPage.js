import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionResult from "../components/QuestionResult";

class QuestionPage extends Component {
  state = {};
  render() {
    const { authedUser, question, category } = this.props;

    if (category === "answered") {
      return <QuestionResult question={question} authedUser={authedUser} />;
    }
    return <h1>Unans QuestionPage</h1>;
  }
}

const mapStateToProps = ({ users, questions, authedUser }, props) => {
  const id = props.match.params.id;
  const currentQuestion = questions[id];

  const question = {
    id,
    author: currentQuestion.author,
    authorName: users[currentQuestion.author].name,
    authorAvatar: users[currentQuestion.author].avatarURL,
    optionOne: currentQuestion.optionOne,
    optionTwo: currentQuestion.optionTwo,
  };

  let category = "unanswered";
  if (
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser)
  ) {
    category = "answered";
  }

  return {
    authedUser,
    question,
    category,
  };
};

export default connect(mapStateToProps)(QuestionPage);
