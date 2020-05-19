import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";

class UnansweredQuestionsList extends Component {
  state = {};
  render() {
    const { unansQues } = this.props;

    return (
      <div>
        {unansQues.length === 0 ? (
          <h1
            style={{
              margin: "2em auto",
              width: "fit-content",
            }}
          >
            No Questions Here...
          </h1>
        ) : null}
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
        authorName: users[question.author].name,
        authorAvatar: users[question.author].avatarURL,
        optionOne: question.optionOne.text,
        optionTwo: question.optionTwo.text,
        timestamp: question.timestamp,
      };
      unansQues.push(ques);
    }
  });
  return {
    unansQues: unansQues.sort(
      (ques1, ques2) => ques2.timestamp - ques1.timestamp
    ),
  };
};

export default connect(mapStateToProps)(UnansweredQuestionsList);
