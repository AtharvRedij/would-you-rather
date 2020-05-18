import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";

class UnansweredQuestionsList extends Component {
  state = {};
  render() {
    const { unansQues } = this.props;

    return (
      <div>
        <h1>UnansweredQuestionsList</h1>

        {unansQues.map((question) => (
          <QuestionPreview key={question.quesId} question={question} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  let unansQues = [];

  Object.keys(questions).forEach((key) => {
    const question = questions[key];

    if (
      !(
        question.optionOne.votes.includes(authedUser) ||
        question.optionTwo.votes.includes(authedUser)
      )
    ) {
      const ques = {
        category: "unans",
        quesId: key,
        author: question.author,
        avatar: users[question.author].avatarURL,
        optionOne: question.optionOne.text,
        optionTwo: question.optionTwo.text,
      };
      unansQues.push(ques);
    }
  });
  return {
    unansQues,
  };
};

export default connect(mapStateToProps)(UnansweredQuestionsList);
